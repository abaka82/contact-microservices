const postContact = contacts => (request, reply) => {
  // get max Id
  const maxId = Math.max.apply(Math, contacts.map(contact => parseInt(contact.id)))
  request.payload.id = maxId + 1

  // fill others data
  request.payload.photo = ''
  request.payload.others = {}

  // save contact
  contacts.push(request.payload)

  reply({
    message: 'contact saved'
  }).code(201)
}

module.exports = postContact
