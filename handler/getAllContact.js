const getAllContact = contacts => (request, reply) => {
  reply({
    message: 'Get Contact by id',
    data: contacts
  }).code(200)
}

module.exports = getAllContact
