'use strict';

const io = require('socket.io')(3000);

io.on('connection', socket => {
  console.log(`Connected socket id: ${socket.id}`);

  // socket.on('speak', payload => {
  //   socket.broadcast.emit('message', payload);
  // });

  socket.on('file-save', payload => {
    io.emit('message', payload);
  });
  

  socket.on('file-error', payload => {
    io.emit('file-error', payload);
  });
});