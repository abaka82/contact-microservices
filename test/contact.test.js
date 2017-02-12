const { expect } = require('code')
const { describe, it } = exports.lab = require('lab').script()

// require hapi server
const Server = require('../server')

describe('GET /contact', () => {
  it('should get all contact', (done) => {
    Server.inject({
      method: 'GET',
      url: '/contact'
    }, (response) => {
      expect(response.statusCode).to.equal(200)
      done()
    })
  })
})

describe('GET /contact/{id}', () => {
  it('should get one contact by id 1 and get 200 response code', (done) => {
    Server.inject({
      method: 'GET',
      url: '/contact/1'
    }, (response) => {
      expect(response.statusCode).to.equal(200)
      done()
    })
  })

  it('should get one contact by id 4 and get 400 response code', (done) => {
    Server.inject({
      method: 'GET',
      url: '/contact/4'
    }, (response) => {
      expect(response.statusCode).to.equal(400)
      done()
    })
  })
})

describe('POST /contact', () => {
  it('should post contact data', (done) => {
    Server.inject({
      method: 'POST',
      url: '/contact',
      payload: JSON.stringify({
        firstName: 'test',
        lastName: 'test',
        age: 2
      })
    }, (response) => {
      expect(response.statusCode).to.equal(201)
      done()
    })
  })
})

describe('PUT /contact/{id}', () => {
  it('should edit contact', (done) => {
    Server.inject({
      method: 'PUT',
      url: '/contact/1',
      payload: JSON.stringify({
        firstName: 'test',
        lastName: 'test',
        age: 2
      })
    }, (response) => {
      expect(response.statusCode).to.equal(201)
      done()
    })
  })

  it('should not edit any contact', (done) => {
    Server.inject({
      method: 'PUT',
      url: '/contact/5',
      payload: JSON.stringify({
        firstName: 'test',
        lastName: 'test',
        age: 2
      })
    }, (response) => {
      expect(response.statusCode).to.equal(400)
      done()
    })
  })
})

describe('DELETE /contact/{id}', () => {
  it('should delete contact', (done) => {
    Server.inject({
      method: 'DELETE',
      url: '/contact/1'
    }, (response) => {
      expect(response.statusCode).to.equal(202)
      done()
    })
  })

  it('should not delete any contact', (done) => {
    Server.inject({
      method: 'DELETE',
      url: '/contact/4'
    }, (response) => {
      expect(response.statusCode).to.equal(400)
      done()
    })
  })
})
