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

module.exports = {
  renderDashboardPage,
  renderActiveBidPage,
};
