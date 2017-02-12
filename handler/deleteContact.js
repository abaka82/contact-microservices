const deleteContact = contacts => (request, reply) => {
  const id = request.params.id
  const idx = contacts.findIndex(contact => contact.id === id)

  if (idx === -1) {
    return reply({
      message: 'contact unavailable'
    }).code(400)
  }

  contacts = contacts.splice(idx, 1)
  reply({
    message: 'contact deleted'
  }).code(202)
}

module.exports = deleteContact
