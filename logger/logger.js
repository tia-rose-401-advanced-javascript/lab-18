'use strict';

const io =  require('socket.io-client');
const socket = io.connect('http://localhost:3000');

let logMessage = payload => {
  console.log('File saved:', payload);
};

let logError = () => {
  console.error('ERROR: something went wrong');
};

socket.on('file-save', logMessage);
socket.on('file-error', logError);

module.exports = {logMessage, logError};