/**
 * Renders the explore page
 * @param {import('express').Request} _req Request
 * @param {import('express').Response} res Response
 */
function renderExplorePage(_req, res) {
  res.render("pages/explore", {
    title: "Explore",
  });
}

module.exports = {
  renderExplorePage,
};
