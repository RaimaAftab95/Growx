"use strict";

const { body } = require("express-validator");

const {
  handleValidationError,
} = require("../utils/handleValidationError.util");

const User = require("../models/user.model");

const validateRegisterUser = [
  body("fullName").isString().withMessage("Full name must be a string").trim(),
  body("email")
    .isEmail()
    .withMessage("Invalid email address")
    .normalizeEmail({ all_lowercase: true })
    .trim(),
  body("email")
    .custom(async (value) => {
      const user = await User.findOne({ email: value }).lean().exec();

      if (user) {
        throw new Error();
      }
    })
    .withMessage("In case you already have an account, please login"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 6 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
    )
    .withMessage(
      "Password must contain at least one lowercase letter, one uppercase letter, one number and one special character"
    )
    .trim(),
  handleValidationError,
];

const validateLoginUser = [
  body("email")
    .isEmail()
    .withMessage("Invalid email address")
    .normalizeEmail({ all_lowercase: true })
    .trim(),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 6 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
    )
    .withMessage(
      "Password must contain at least one lowercase letter, one uppercase letter, one number and one special character"
    )
    .trim(),
  handleValidationError,
];

module.exports = {
  validateLoginUser,
  validateRegisterUser,
};
