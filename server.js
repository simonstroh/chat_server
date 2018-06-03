var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/chat.svg', function(req, res) {
  res.sendFile(__dirname + '/public/chat.svg')
})
app.get('/app.js', function(req, res) {
  res.sendFile(__dirname + '/public/app.js')
})
app.get('/chat.svg', function(req, res) {
  res.sendFile(__dirname + '/public/chat.svg')
})
app.get('/video.svg', function(req, res) {
  res.sendFile(__dirname + '/public/video.svg')
})
io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('chat message', function(msg){
    console.log('New message!')
    io.emit('chat message', msg);
  });
});
http.listen(8989, function() {
  console.log("Listening on port 8989")
})
