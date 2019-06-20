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
    .catch(() => {
      let error = {
        name: 'error',
      };

      socket.emit('file-error', JSON.stringify(error));
    });
};


let file = process.argv.slice(2).shift();
alterFile(file);
