'use strict';

const io = require('socket.io')(3000);

io.on('connection', socket => {
  console.log(`Connected socket id: ${socket.id}`);
  socket.on('speck', payload => {
    socket.broadcast.emit('message', payload);
  });
});