const express = require('express')
const router = express.Router()
const burger = require('../models/burger')

// router page

// load index handlebars file
router.get("/", async function(req, res){
    const data = await burger.selectAll()

    var hbsObject = {
        burgers: data
    }
    console.log('[router GET]', hbsObject)
    res.render("index", hbsObject)
})

router.post("/api/burgers", async function(req, res){
    //console.log(res)
    console.log('[router POST] reached ..')
    const data = await burger.insertOne({
        burger_string: req.body.name
       // devoured: req.body.devoured
    })
    console.log('[router POST]', data)
    res.json(data)

    // burger.create(["burger_string", "devoured"], [req.body.name, req.body.devoured],
    // function(result){
    //     res.json({id: result.burgerId})
    // })
})

router.put("/api/burgers/:id", async function(req, res){
    const id = req.body.id
    const data = await burger.updateOne(id)
    console.log('router PUT', data)
    res.json(data)
})

module.exports = router