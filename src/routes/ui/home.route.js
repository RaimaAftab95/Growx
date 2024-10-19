const express = require("express");

const { renderHomePage } = require("../../controllers/ui/home.controller");

const router = express.Router();

router.get("/", renderHomePage);

module.exports = router;
