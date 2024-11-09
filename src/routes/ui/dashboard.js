const express = require("express");

const {
  renderDashboardPage,
  renderActiveBidPage,
} = require("../../controllers/ui/dashboard");

const router = express.Router();

router.get("/", renderDashboardPage);
router.get("/active-bid", renderActiveBidPage);

module.exports = router;
