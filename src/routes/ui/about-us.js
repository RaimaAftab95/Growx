const express = require("express");

const { renderAboutusPage } = require("../../controllers/ui/about-us");

const router = express.Router();

router.get("/", renderAboutusPage );

module.exports = router;
