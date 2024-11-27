const express = require("express");

const { renderContactPage } = require("../../controllers/ui/contact");

const router = express.Router();

router.get("/", renderContactPage);

module.exports = router;
