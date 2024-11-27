/**
 * Renders the explore page
 * @param {import('express').Request} _req Request
 * @param {import('express').Response} res Response
 */
function renderContactPage(_req, res) {
  res.render("pages/contact", {
    title: "Contact",
  });
}

module.exports = {
  renderContactPage,
};
