const getAllContact = (contacts) => {
  return {
    method: 'GET',
    path: '/contact',
    config: {
      tags: ['api'],
      description: 'Get all contact',
      notes: 'Get all contact'
    },
    handler: require('../handler/getAllContact')(contacts)
  }
}

module.exports = getAllContact
