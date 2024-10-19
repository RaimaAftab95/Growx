const express = require("express");

const { renderLoginPage } = require("../../controllers/ui/login.controller");

const router = express.Router();

router.get("/", renderLoginPage);

module.exports = router;
