const orm = require('../config/orm')


var burger = {
    // lists all burgers
    selectAll: async function(){
        res = await orm.selectAll("burgers")
        console.log(res)
        return res
    },
    // to add a burger
    insertOne: async function(burgerName, isDevoured){
        res = await orm.insertOne("burgers", burgerName, isDevoured)
        console.log(res)
        return res
    },
    // to change status devoured status
    updateOne: async function(burgerId){
        res = await orm.updateOne("burgers", burgerId)
        console.log(res)
        return res
    }
}

module.exports = burger