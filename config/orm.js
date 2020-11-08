const db = require('./connection')

function selectAll(){
    return db.query('SELECT * FROM burgers')
}

function updateOne(id){
    return db.query(`UPDATE burgers SET devoured=1 WHERE id=${id}`)
}

function insertOne(burgerName, isDevoured){
    return db.query(`INSERT INTO burgers (burger_string, devoured) VALUES("${burgerName}", ${isDevoured})`)
}

module.exports = {selectAll, updateOne, insertOne}