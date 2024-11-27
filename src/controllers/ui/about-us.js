/**
 * Renders the explore page
 * @param {import('express').Request} _req Request
 * @param {import('express').Response} res Response
 */
function renderAboutusPage(_req, res) {
  res.render("pages/about-us", {
    title: "About Us",
  });
}

module.exports = {
  renderAboutusPage,
};
