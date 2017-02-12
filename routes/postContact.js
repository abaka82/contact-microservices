const Joi = require('Joi')

const postContact = contacts => {
  return {
    method: 'POST',
    path: '/contact',
    config: {
      tags: ['api'],
      description: 'Save contact',
      notes: 'Save contact',
      validate: {
        payload: Joi.object().keys({
          firstName: Joi.string().alphanum().min(3).max(30).required().description('First Name').example('Bilbo'),
          lastName: Joi.string().alphanum().min(3).max(30).required().description('Last Name').example('Baggins'),
          age: Joi.number().min(1).max(200).required().description('Age (Years)').example(111),
          photo: Joi.string().description('Link to Profile Pic').example("http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550")
        })
      }, plugins: {
        'hapi-swagger': {
          responses: {
            '201': {
              'description': 'Created',
              'schema': Joi.object({
                message: Joi.string().description('Info message').example('Success!'),
              }).label('Message')
            },
            '400': { 'description': 'Bad Request' },
            '500': { 'description': 'Internal Error' },
          }
        },
      },
    },
    handler: require('../handler/postContact')(contacts)
  }
}

module.exports = postContact
