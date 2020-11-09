const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./controllers/burgers-controller')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(__dirname + "/public"))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine("handlebars", exphbs({ defaultLayout:"main" }))
app.set("view engine", "handlebars")

app.use(routes)

app.listen(PORT, function(){
    console.log(`Server listening on: http://localhost:${PORT}`)
})