'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

socket.on('file-save', payload => {
  socket.emit('saved', payload);
});

socket.on('file-error', payload => {
  socket.emit('error', payload);
});