const orm = require('../config/orm')


var burger = {
    // lists all burgers
    selectAll: async function(){
        res = await orm.selectAll("burgers")
        console.log('Showing',res)
        return res
    },
    // to add a burger
    insertOne: async function(data){
        console.log('[burger.insert] reached ...', data)
        const burgerName = data.burger_string
        //const isDevoured = data.devoured
        console.log(`Sending ${burgerName}`)
        res = await orm.insertOne(burgerName)
        console.log('Inserting', res)
        return res
    },
    // to change status devoured status
    updateOne: async function(burgerId){
        console.log('[burger.updateOne] reached ...', burgerId)
        res = await orm.updateOne(burgerId)
        console.log('Updating', res)
        return res
    }
}

module.exports = burger