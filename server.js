var app = require('express')()
var http = require('http').Server(app)
var parser = require('body-parser')
var io = require('socket.io')(http)
app.use(parser.text())
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/chat.svg', function(req, res) {
  res.sendFile(__dirname + '/public/chat.svg')
})
app.get('/app.js', function(req, res) {
  res.sendFile(__dirname + '/public/app.js')
})
app.get('/end_call.svg', function(req, res) {
  res.sendFile(__dirname + '/public/end_call.svg')
})
app.get('/chat.svg', function(req, res) {
  res.sendFile(__dirname + '/public/chat.svg')
})
app.get('/video.svg', function(req, res) {
  res.sendFile(__dirname + '/public/video.svg')
})
app.get('/PeerConnection.js', function(req, res) {
  res.sendFile(__dirname + '/public/PeerConnection.js')
})
app.get('/video-background.png', function(req, res) {
  res.sendFile(__dirname + '/public/video-background.png')
})
app.get('/enlarge.svg', function(req, res) {
  res.sendFile(__dirname + '/public/enlarge.svg')
})
io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('message', function (data) {
    socket.broadcast.emit('message', data);
  });
  socket.on('chat message', function(msg) {
    console.log('New message!')
    var body = msg.split('⍄')
    var user = body[0]
    console.log(user)
    io.emit('chat message', msg);
  });
});
http.listen(8989, function() {
  console.log("Listening on port 8989...")
})
