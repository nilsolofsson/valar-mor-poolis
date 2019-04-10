const config = require('./config');
const server = new (require('./server'))(config);

process.stdout.write(`starting server on port ${server.config.port}...\n`);
