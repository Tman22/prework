var express = require('express')
var app = express()
var style = require('stylus')

app.use(style.middleware(process.argv[3] || 'public' ))
app.use(express.static(process.argv[3] || 'public'))

app.listen(process.argv[2] || 3000t)
