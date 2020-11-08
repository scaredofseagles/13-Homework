const mysql = require('mysql')
require('dotenv').config()

class Database{
    constructor(config){
        this.connecttion = mysql.createConnection(config)
    }
    query(sql, args=[]){
        return new Promise((resolve, reject) =>{
            this.connecttion.query(sql, args, (err, rows) => {
                if (err)
                    return reject (err)
                resolve (rows)
            })
        })
    }
    close(){
        return new Promise((resolve, reject) => {
            this.connecttion.end(err =>{
                if (err)
                    return reject (err)
                resolve ()
            })
        })
    }
}

const db = new Database({
    host:"localhost",
    port: 3306,
    user:process.env.DB_USER,
    password: process.env.DB_USER,
    database: "burgers_db"
})

module.exports = db