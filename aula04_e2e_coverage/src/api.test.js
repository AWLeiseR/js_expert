const { describe, it, after, before } = require('mocha')
const supertest = require('supertest')
const assert = require('assert')

describe('API suite test', () => {
    let app
    before((done) => {
        app = require('./api')
        app.once('listening', done)
    })
    after((done) => {
        app.close(done)
    })
    describe('/contact:get', () => {
        it('should request the contact route and return HTTP Status 200', async () => {
            const response = await supertest(app).get('/contact').expect(200)
            assert.strictEqual(response.text, 'contact us page')
        })
    })
    describe('/login:post', () => {
        it('should request the login route and return HTTP Status 200', async () => {
            const response = await supertest(app)
                .post('/login')
                .send({ username: 'alanleiser', password: '123' })
                .expect(200)
            assert.strictEqual(response.text, 'Log in succeeded')
        })
    })
    describe('/login:post', () => {
        it('should request the login route and return HTTP Status 401', async () => {
            const response = await supertest(app)
                .post('/login')
                .send({ username: 'alanleiser', password: '1223' })
                .expect(401)
            assert.ok(response.unauthorized)
            assert.strictEqual(response.text, 'Log in Failed')
        })
    })
    describe('/hi:get - 404', () => {
        it('should request and existing route and return HTTP Status 404', async () => {
            const response = await supertest(app).get('/hi').expect(404)
            assert.strictEqual(response.text, 'NOT FOUND')
        })
    })
})
