var a = require('express')

var b = a()
b.get('/', function(req, res) {
    res.send('Welcome to Express.js')
})

b.get('/tushar', function(req, res) {
    res.send('Welcome to Tushar\'s page')
})

b.listen(9000)