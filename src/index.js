var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('src/client'))

console.log(__dirname)

app.get('/', function (req, res){
    res.sendFile('dist/index.html')
})

app.listen(8080, function(){
    console.log("Local host running on: 8080")
})