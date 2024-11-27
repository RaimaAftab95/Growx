/**
 * Renders the dashboard page
 * @param {import('express').Request} _req Request
 * @param {import('express').Response} res Response
 */
function renderDashboardPage(_req, res) {
  
  res.render("pages/dashboard", {
    title: "Dashboard",
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
