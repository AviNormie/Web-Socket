const http = require('http')
const express = require('express')
const app = express()
const server=http.createServer(app)
const path =require('path')
const {Server} = require('socket.io')

const io = new Server(server)
//Socket.io

io.on('connection', (socket) => {
    socket.on("user-message", (message) =>{
       io.emit("message",message) //to show data to clients 
    })

    // socket.on('disconnect', () => {
    //     console.log('user disconnected')
    // })

    // socket.on('chat message', (msg) => {
    //     io.emit('chat message', msg)
    // })
})

app.use(express.static(path.resolve('./public')))
app.get('/', (req, res) => {
    return res.sendFile('public/index.html')
})



server.listen(9000, () => console.log('Server started at port 9000'))