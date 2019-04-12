class Server {
    constructor(config) {
        this.express = require('express');
        this.server = this.express();
        this.config = config.webserver;
        this.EOL = require('os').EOL;

        this.Got = new (require('./controllers/got-controller'))(config.gotController);

        this.server.set('views', __dirname + '/routes');
        this.server.set('view engine', 'jsx');
        this.server.engine('jsx', require('express-react-views').createEngine());

        this.server.use('/public', this.express.static('public'));

        this.setupRoutes();

        this.server.listen(this.config.port, this.serverStartMessage.bind(this));
    }

    setupRoutes() {
        this.server.get('/', async (req,res) => {
            let characters = await this.Got.getCharacterStatuses();
            let players     = await this.Got.getUserResponseNames();
            res.render('GET/scoreboard', {characters, players});
        });

        this.server.get('*', async (req, res) => {
            let characters = await this.Got.getCharacterStatuses();
            let players     = await this.Got.getUserResponseNames();
            res.render('GET/404', {characters, players});
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
