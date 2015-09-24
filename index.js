var express = require('express')
var app = express()

app.set('views', './views')
app.set('view engine', 'jade')

app.get('/', function(req, res){
  res.render('index')
})

app.get('/about', function(req, res){
  res.send('This is the about page.')
})

var server = app.listen(3000, function(){
  console.log('Server running at http://localhost:' + server.address().port)
})
