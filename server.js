const express = require('express');
const http = require('http')
const wsService = require("./wsService")
const indexApp = require("./src/index")

const PORT = 3000
const app = express()

const server = http.createServer(app)
wsService.start(server)

app.use(express.static('public'))

server.listen(PORT, () => {
    indexApp()
    console.log("App running on ", PORT)
})