const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  path: '/socket.io'
});

const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/status', (req, res) => res.send('Hola mundo socket.io'))

server.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

io.on('connection', (socket) => {
  console.log('Nuevo usuario');

  socket.emit('USUARIO_RECIVIDO', {client_id: socket.client.id});
});
