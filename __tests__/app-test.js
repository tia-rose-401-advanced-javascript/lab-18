'use strict';

let app = require('../app/app');
let alter = require('../mod/alter');

jest.mock('fs');

describe('read', () => {
  it('should read a text file', () => {
    let file = 'file.txt';

    return alter.readFile(file)
      .then(data => {
        expect(data).toBeDefined();
      });
  });
});


describe('upper', () => {
  it('should take in text data and return it back all in caps', () => {
    let txt = 'thisisbutatest';
    let result = alter.upper(txt);
    expect(result).toBe('THISISBUTATEST');
  });
});

//  Need to double check on how to properly write a test for write
// describe('write', () => {
//   it('should write a text file', () => {
//     let file = 'file.txt';

//     return alter.writeFile(file)
//       .then(data => {
//         expect(data).toBeDefined();
//       });
//   });
// });