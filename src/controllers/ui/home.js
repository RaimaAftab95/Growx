/**
 * Renders Home page
 * @param {import('express').Request} _req Request
 * @param {import('express').Response} res Response
 */
function renderHomePage(_req, res) {
  res.render("index", {
    title: "GrowX",
  });
}

module.exports = {
  renderHomePage,
};
