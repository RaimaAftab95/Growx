'use strict';

const {
  validationResult
} = require('express-validator');

const handleValidationError = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ 
      msg: 'Validation failed',
      errors: errors.array() 
    });
  }

  next();
};

module.exports = {
  handleValidationError
};
