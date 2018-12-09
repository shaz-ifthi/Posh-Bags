//Dependencies
var express = require('express')
var db = require("./models")
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var PORT = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, 'public')))
//middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

//Routes
require('./routes/api-routes.js')(app)
require('./routes/html-routes.js')(app)

//Sync
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Listening on port " + PORT)
    })
})