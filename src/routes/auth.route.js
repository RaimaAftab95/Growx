"use strict";

const express = require("express");

const { loginUser, registerUser } = require("../controllers/auth.controller");

const {
  validateLoginUser,
  validateRegisterUser,
} = require("../validators/auth.validator");

const router = express.Router();

router.post("/login", validateLoginUser, loginUser);
router.post("/register", validateRegisterUser, registerUser);

module.exports = router;
