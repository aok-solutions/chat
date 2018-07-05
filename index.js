let app = require('express')()
let http = require('http').Server(app)
let port = 3000

app.get('/', (req,res) => {
  res.send('<h1>Hello World</h1>')
})

http.listen(port, () => {
  console.log('listening on port:', port)
})
