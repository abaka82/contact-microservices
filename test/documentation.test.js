const { expect } = require('code')
const { describe, it } = exports.lab = require('lab').script()

const Server = require('../server')
const config = require('../config')

describe(`GET ${config.documentationPath}`, () => {
  it('should get documentation', (done) => {
    Server.inject({
      method: 'GET',
      url: `${config.documentationPath}`
    }, (response) => {
      expect(response.statusCode).to.equal(200)
      done()
    })
  })
})
