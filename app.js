'use strict';


const alter = require('./mod/alter');

const net = require('net');
const client = new net.Socket();

const alterFile = (file) => {
  // fs.readFile( file, (err, data) => {
  //   if(err) { throw err; }
  //   let text = data.toString().toUpperCase();
  //   fs.writeFile( file, Buffer.from(text), (err, data) => {
  //     if(err) { throw err; }
  //     console.log(`${file} saved`);
  //   });
  // });

  alter.readFile(file)
    .then(data => {
      alter.writeFile(file, alter.upper(data));
    })
    .catch(error => {
      client.write(error);
    });
};


let file = process.argv.slice(2).shift();
alterFile(file);
