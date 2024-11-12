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

const { requireAuth } = require("../../middleware/auth.middleware");

const router = express.Router();

 router.get("/", requireAuth, renderDashboardPage);
// router.get('/dashboard', requireAuth, (req, res) => {
//   res.json({ message: 'Welcome to the Dashboard!', user: req.user });
// });
router.get("/active-bid", requireAuth, renderActiveBidPage);
router.get("/create", requireAuth, renderCreatePage);
router.get("/favorite", requireAuth, renderFavoritePage);
router.get("/explore-dashboard", requireAuth, renderExplorePage);
router.get("/history", requireAuth, renderHistoryPage);
router.get("/market", requireAuth, renderMarketPage);
router.get("/settings", requireAuth, renderSettingsPage);
router.get("/tf-collection", requireAuth, renderCollectionPage);
router.get("/wallet", requireAuth, renderWalletPage);

module.exports = router;
