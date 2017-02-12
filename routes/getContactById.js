const Joi = require('Joi')

const getContactById = contacts => {
  return {
    method: 'GET',
    path: '/contact/{id}',
    config: {
      tags: ['api'],
      description: 'Get Contact by id',
      notes: 'Get Contact by id',
      validate: {
        params: {
          id: Joi.number()
            .required()
            .description('the id of contact')
        }
      }
    },
    handler: require('../handler/getContactById')(contacts)
  }
}

module.exports = getContactById
