const express = require("express");

const {
  renderLoginPage,
  renderRegisterPage,
} = require("../../controllers/ui/auth");

const router = express.Router();

router.get("/login", renderLoginPage);
router.get("/register", renderRegisterPage);

module.exports = router;
