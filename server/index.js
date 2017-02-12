// ================ Base Setup ========================
// Include Hapi package
const Hapi = require('hapi');
const Pack = require('../package');
const config = require('../config');

//  Setup the Swagger options.
const swaggerOptions = {
  info: {
    'title': 'Contact Service API Documentation',
    'version': Pack.version,
  },
  documentationPath: config.documentationPath
};

// Create Server Object
const server = new Hapi.Server()

// Define PORT number
server.connection({
  port: config.port
});

server.register([
  require('inert'),
  require('vision'), {
    'register': require('hapi-swagger'),
    'options': swaggerOptions
  }
], () => {
  server.start((err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Server running at:', server.info.uri);
      console.log('Docs running at:', server.info.uri + config.documentationPath);
    }
  })
})

require('./registerApiRoutes')(server);

module.exports = server;
