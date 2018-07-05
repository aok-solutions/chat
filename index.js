let app = require('express')()
let http = require('http').Server(app)
let port = 3000

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html')
})

http.listen(port, () => {
  console.log('listening on port:', port)
})
