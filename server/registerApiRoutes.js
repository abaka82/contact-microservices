const routesRegistration = (server) => {
  // =============== Routes for our API =======================
  var contacts = [{
    'id': 1,
    'firstName': 'Bilbo',
    'lastName': 'Baggins',
    'age': 111,
    'photo': 'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
    'other': {}
  }, {
    'id': 2,
    'firstName': 'Luke',
    'lastName': 'Skywalker',
    'age': 20,
    'photo': 'N/A',
    'other': {}
  }]

  server.route(require('../routes/getContactById')(contacts))
  server.route(require('../routes/getAllContact')(contacts))
  server.route(require('../routes/postContact')(contacts))
  server.route(require('../routes/deleteContact')(contacts))
  server.route(require('../routes/putContact')(contacts))
}

module.exports = routesRegistration
