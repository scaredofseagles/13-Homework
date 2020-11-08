const orm = require('../config/orm')


var burger = {
    // lists all burgers
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res)
        })
    },
    // to add a burger
    create: function(burgerName, isDevoured, cb){
        orm.insertOne("burgers", burgerName, isDevoured, function(res){
            cb(res)
        })
    },
    // to change status devoured status
    update: function(burgerId, cb){
        orm.updateOne("burgers", burgerId, function(res){
            cb(res)
        })
    }
}

module.exports = burger