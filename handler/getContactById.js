const getById = (contacts) => (request, response) => {
  const id = request.params.id
  const data = contacts.filter(contact => contact.id === id)

  if (!data.length) {
    return response({
      message: `data id ${id} is not in contact list`
    }).code(400)
  }

  response({
    message: 'Get Contact by id',
    data
  }).code(200)
}

module.exports = getById
