/**
 * Renders the dashboard page
 * @param {import('express').Request} req Request
 * @param {import('express').Response} res Response
 */
function renderDashboardPage(req, res) {
  
  res.render("pages/dashboard", {
    title: "Dashboard",
    user: req.user,
  });
}

/**
 * Renders the active bid page
 * @param {import('express').Request} _req Request
 * @param {import('express').Response} res Response
 */
function renderActiveBidPage(_req, res) {
  res.render("pages/active-bid", {
    title: "Active Bid",
    user: req.user,
  });
}

/**
 * Renders the create page
 * @param {import('express').Request} _req Request
 * @param {import('express').Response} res Response
 */
function renderCreatePage(_req, res) {
  res.render("pages/create", {
    title: "Create",
    user: req.user,
  });
}

/**
 * Renders the favorite page
 * @param {import('express').Request} _req Request
 * @param {import('express').Response} res Response
 */
function renderFavoritePage(_req, res) {
  res.render("pages/favorite", {
    title: "Favorite",
    user: req.user,
  });
}

/**
 * Renders the explore page
 * @param {import('express').Request} _req Request
 * @param {import('express').Response} res Response
 */
function renderExplorePage(_req, res) {
  res.render("pages/explore-dashboard", {
    title: "Explore",
    user: req.user,
  });
}


/**
 * Renders the history page
 * @param {import('express').Request} _req Request
 * @param {import('express').Response} res Response
 */
function renderHistoryPage(_req, res) {
  res.render("pages/history", {
    title: "History",
    user: req.user,
  });
}


/**
 * Renders the Market page
 * @param {import('express').Request} _req Request
 * @param {import('express').Response} res Response
 */
function renderMarketPage(_req, res) {
  res.render("pages/market", {
    title: "Market",
    user: req.user,
  });
}

/**
 * Renders the settings page
 * @param {import('express').Request} _req Request
 * @param {import('express').Response} res Response
 */
function renderSettingsPage(_req, res) {
  res.render("pages/settings", {
    title: "Settings",
    user: req.user,
  });
}

/**
 * Renders the Collection page
 * @param {import('express').Request} _req Request
 * @param {import('express').Response} res Response
 */
function renderCollectionPage(_req, res) {
  res.render("pages/tf-collection", {
    title: "TF-Collection",
    user: req.user,
  });
}

/**
 * Renders the Wallet page
 * @param {import('express').Request} _req Request
 * @param {import('express').Response} res Response
 */
function renderWalletPage(_req, res) {
  res.render("pages/wallet", {
    title: "Wallet",
    user: req.user,
  });
}

module.exports = {
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
};
