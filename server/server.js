'use strict';

const io = require('socket.io')(3000);

io.on('connection', socket => {
  console.log(`Connected socket id: ${socket.id}`);

  socket.on('file-save', payload => {
    io.emit('file-save', payload);
  });
  
  socket.on('file-error', payload => {
    io.emit('file-error', payload);
  });
});