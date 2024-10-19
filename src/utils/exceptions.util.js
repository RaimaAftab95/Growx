'use strict';

class APIException extends Error {
  /**
   * @param {string} message
   * @param {number} status 
   */
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

class BadRequestException extends APIException {
  /**
   * @param {string} message 
   */
  constructor(message) {
    super(message, 400);
  }
}

class NotFoundException extends APIException {
  /**
   * @param {string} message 
   */
  constructor(message) {
    super(message, 404);
  }
}

class InternalServerErrorException extends APIException {
  /**
   * @param {string} message 
   */
  constructor(message) {
    super(message, 500);
  }
}

class UnauthorizedException extends APIException {
  /**
   * @param {string} message 
   */
  constructor(message) {
    super(message, 401);
  }
}

class UnprocessableContentException extends APIException {
  /**
   * @param {string} message 
   */
  constructor(message) {
    super(message, 422);
  }
}

module.exports = {
  BadRequestException,
  NotFoundException,
  InternalServerErrorException,
  UnauthorizedException,
  UnprocessableContentException
};
