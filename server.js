const express = require('express');
const http =  require('http') 
const socketio = require('socket.io')


const PORT = 3000
const app = express()

const server = http.createServer(app)
const sockets = socketio(server)

app.use(express.static('public'))

server.listen(PORT, () =>{
    console.log("App running on ",PORT)
})

