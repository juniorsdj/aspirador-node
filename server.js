const express = require('express');
const http = require('http')
const wsService = require("./wsService")


const PORT = 3000
const app = express()

const server = http.createServer(app)
wsService.start(server)

app.use(express.static(__dirname + '/public'))

server.listen(PORT, () => {
    console.log("App running on ", PORT)
})