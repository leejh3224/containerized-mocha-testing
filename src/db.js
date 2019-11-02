const mysql = require('mysql2/promise')

const createConnection = async () => {
    return mysql.createConnection({
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        database: process.env.MYSQL_DB || 'test',
        password: process.env.MYSQL_PASSWORD || '',
        multipleStatements: true
    })
}

const dropDatabase = async (db) => {
    return db.execute(/*sql*/`
        drop table if exists user;
    `)
}

const synchronize = async (db) => {
    await dropDatabase(db)
    return db.execute(/*sql*/`
        create table user(
            id int auto_increment primary key,
            name varchar(255) null
        )engine=innodb;
    `)
}

module.exports = { createConnection, synchronize }
