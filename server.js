class Server {
    constructor(config) {
        this.express = require('express');
        this.server = this.express();
        this.config = config.webserver;
        this.ttl = config.gotController.cacheTTL/1000;
        this.EOL = require('os').EOL;

        this.Got = new (require('./controllers/got-controller'))(config.gotController);

        this.server.set('views', __dirname + '/routes');
        this.server.set('view engine', 'jsx');
        this.server.engine('jsx', require('express-react-views').createEngine());

        this.server.use('/public',this.express.static('public'));
        this.server.use(this.headers.bind(this));

        this.setupRoutes();

        this.server.listen(this.config.port, this.serverStartMessage.bind(this));
    }

    headers(req,res,next) {
        res.set('Cache-Control', 's-maxage=' + this.ttl);
        next();
    }

    setupRoutes() {
        this.server.get('/', async (req,res) => {
            let characters = await this.Got.getCharacterStatuses(),
                scores = await this.Got.getScores(),
                stats = await this.Got.getStatistics();

            res.render('GET/scoreboard', {
                characters,
                scores,
                stats,
                title: 'Game of thrones S08, Deathpool'
            });
        });

        this.server.get('*', (req, res) => {
            res.render('GET/404');
        });
    }

    createRouteEngine(method, route) {
        return (req, res) => {
            require(`./routes/${method}/${route}`);
            res.render();
        }
    }

    // todo: mode stdout logic to seprate logger class
    serverStartMessage() {
        let messageText = `webserver is up and running on port ${this.config.port}`;
        let consoleWidth = process.stdout.columns;
        let barrier = '='.repeat(consoleWidth)+this.EOL;

        process.stdout.write(barrier);
        process.stdout.write(messageText+this.EOL);
        process.stdout.write(barrier);
    }

}

module.exports = Server;
