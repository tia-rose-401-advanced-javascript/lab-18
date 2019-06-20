'use strict';

const alter = require('../mod/alter');

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');



const alterFile = (file) => {
 
  alter.readFile(file)
    .then(data => {
      alter.writeFile(file, alter.upper(data));
      socket.emit('file-save', file);
    })
    .catch(error => socket.emit('file-error'), 500);
};


let file = process.argv.slice(2).shift();
alterFile(file);
