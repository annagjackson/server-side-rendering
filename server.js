var path = require('path')
var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')

var routes = require('./routes')

var app = express()
module.exports = app

// Middleware
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static("public"))
app.use(bodyParser.urlencoded())

// Routes
app.get('/', routes.home)
app.get('/detail/:id', routes.detail)

app.get('/form', routes.get)
app.post('/form', routes.sayHello)
