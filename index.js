let app = require('express')()
let http = require('http').Server(app)
let io = require('socket.io')(http)
let port = 3000

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

http.listen(port, () => {
  console.log('listening on port:', port)
})
