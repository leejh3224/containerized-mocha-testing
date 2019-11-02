const { createConnection, synchronize } = require('../../src/db')
const request = require('supertest')
const { app } = require('../../src/app')
const { expect } = require('chai')

let db

before(async () => {
    db = await createConnection()
    await synchronize(db)
    await db.query(/*sql*/`
        INSERT INTO user (name) VALUES ('chris');
    `)
})

it('will return bad request when name is empty', async () => {
    const res = await request(app)
        .get('/users')
        .query({ name: '' })
    
    expect(res.status).to.equal(400)
})