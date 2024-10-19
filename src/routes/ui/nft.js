const express = require("express");

const { renderNFTDetailsPage } = require("../../controllers/ui/nft");

const router = express.Router();

router.get("/:id", renderNFTDetailsPage);

module.exports = router;
