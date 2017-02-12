const putContact = contacts => (request, response) => {
  const id = request.params.id
  const contact = request.payload
  const idx = contacts.findIndex(contact => contact.id === id)

  if (idx === -1) {
    return response({
      message: `data id ${id} is not in contact list`
    }).code(400)
  }

  ['firstName', 'lastName', 'age', 'photo'].forEach(key => contacts[idx][key] = contact[key])

  response({
    message: 'Contact edited',
    data: contacts[idx]
  }).code(201)
}

module.exports = putContact
