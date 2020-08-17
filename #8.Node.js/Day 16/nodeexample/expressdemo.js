var a = require('express')

var b = a()
b.get('/', function(req, res) {
    res.send('Welcome to Express.js')
})

b.listen(9000)