const Joi = require('joi')

const deleteContact = contacts => {
  return {
    method: 'DELETE',
    path: '/contact/{id}',
    config: {
      tags: ['api'],
      description: 'Delete Contact',
      notes: 'Delete Contact',
      validate: {
        params: {
          id: Joi.number()
            .required()
            .description('the id of contact')
        }
      }
    },
    handler: require('../handler/deleteContact')(contacts)
  }
}

module.exports = deleteContact
