const Joi = require('joi')

const putContact = contacts => {
  return {
    method: 'PUT',
    path: '/contact/{id}',
    config: {
      tags: ['api'],
      description: 'Edit Contact',
      notes: 'Edit Contact',
      validate: {
        params: {
          id: Joi.number()
            .required()
            .description('the id of contact')
        },
        payload: Joi.object().keys({
          firstName: Joi.string().alphanum().min(3).max(30).required(),
          lastName: Joi.string().alphanum().min(3).max(30).required(),
          age: Joi.number().min(1).max(100).required(),
          photo: Joi.string()
        })
      }
    },
    handler: require('../handler/putContact')(contacts)
  }
}

module.exports = putContact
