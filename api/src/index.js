const app = require('./app')
const server = require('http').Server(app.express)
const io = require('socket.io')(server)

app.setIo(io)
server.listen(process.env.PORT)
