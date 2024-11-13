const express = require("express");

const {
  renderDashboardPage,
  renderActiveBidPage,
   renderCreatePage,
  renderFavoritePage,
  renderExplorePage,
  renderHistoryPage,
  renderMarketPage,
  renderSettingsPage,
  renderCollectionPage,
  renderWalletPage,
} = require("../../controllers/ui/dashboard");



const router = express.Router();

 router.get("/", renderDashboardPage);
router.get("/active-bid", renderActiveBidPage);
router.get("/create",renderCreatePage);
router.get("/favorite", renderFavoritePage);
router.get("/explore-dashboard", renderExplorePage);
router.get("/history", renderHistoryPage);
router.get("/market", renderMarketPage);
router.get("/settings", renderSettingsPage);
router.get("/tf-collection", renderCollectionPage);
router.get("/wallet", renderWalletPage);

module.exports = router;
