'use strict';

const io =  require('socket.io-client');
const socket = io.connect('http://localhost:3000');

let logMessage = payload => {
  console.log('I heard this message:', payload);
};

let logError = () => {
  console.error('ERROR: something went wrong');
};

socket.on('message', logMessage);
socket.on('file-error', logError);