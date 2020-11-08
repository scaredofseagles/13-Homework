const express = require('express')
const router = express.Router()
const burger = require('../models/burger')

// router page

// load index handlebars file
router.get("/", function(req, res){
    burger.all(function(data){
        var handleObj = {
            burgers: data
        }
        console.log(handleObj)
        res.render("index", handleObj)
    })
})

module.exports = router