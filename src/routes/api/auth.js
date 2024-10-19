const express = require("express");

const { loginUser, registerUser } = require("../../controllers/api/auth");

const {
  validateLoginUser,
  validateRegisterUser,
} = require("../../validators/auth.validator");

const router = express.Router();

router.post("/login", validateLoginUser, loginUser);
router.post("/register", validateRegisterUser, registerUser);

module.exports = router;
