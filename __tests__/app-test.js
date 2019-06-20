'use strict';

let app = require('../app/app');
let alter = require('../mod/alter');

jest.mock('fs');

describe('app', () => {
  it('should take in text data and return it back all in caps', () => {
    let txt = 'thisisbutatest';
    let result = alter.upper(txt);
    expect(result).toBe('THISISBUTATEST');
  });
});