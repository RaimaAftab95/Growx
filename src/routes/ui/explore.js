const express = require("express");

const { renderExplorePage } = require("../../controllers/ui/explore");

const router = express.Router();

router.get("/", renderExplorePage);

module.exports = router;
