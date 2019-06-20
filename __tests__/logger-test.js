'use strict';

const loggers = require('../logger/logger');

describe('Loggers', () => {
  describe('logMessage', () => {
    it('should run console log once when saved', () => {
      // Arrange
      let logSpy = jest.spyOn(console, 'log');
      

      // Act
      loggers.logMessage('file-save');

      // Assert
      expect(logSpy).toHaveBeenCalledTimes(1);
      logSpy.mockRestore();
    });
  });

  describe('logError', () => {
    it('should run console error once when an error is encountered', () => {
      // Arrange
      let errorSpy = jest.spyOn(console, 'error');

      // Act
      loggers.logError('file-error');

      // Assert
      expect(errorSpy).toHaveBeenCalledTimes(1);
      errorSpy.mockRestore();
    });
  });
});