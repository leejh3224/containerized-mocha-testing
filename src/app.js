const express = require('express')
const { createConnection } = require('./db')

const app = express()

app.get('/users', async (req, res) => {
    const { name } = req.query

    if (!name) {
        return res.status(400).send('bad request!')
    }

    const db = await createConnection()
    const [rows] = await db.execute(/*sql*/`
        select * from user where name like ?
    `, [`%${name}%`])

    return res.json(rows)
})

module.exports = { app }
