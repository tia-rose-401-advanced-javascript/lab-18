'use strict';

const fs = require('fs');


function readFile(file){
  return new Promise((resolve, reject) => {
    fs.readFile(file, (error, data) => {
      if(error)reject(error);
      else resolve(data);
    });
  });
}

function upper(data){
  data = Buffer.from(data);
  return data.toString().toUpperCase();
}

function writeFile(file, text){
  return new Promise((resolve, reject) => {
    fs.writeFile(file, text, (error) => {
      if(error) reject(error);
      else resolve();
    });
  });
}

module.exports = {readFile, upper, writeFile};