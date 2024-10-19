const express = require("express");

const { renderHomePage } = require("../../controllers/ui/home");

const router = express.Router();

router.get("/", renderHomePage);

module.exports = router;
