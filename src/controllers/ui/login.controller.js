/**
 * Renders Login page
 * @param {import('express').Request} _req Request
 * @param {import('express').Response} res Response
 */
function renderLoginPage(_req, res) {
  res.render("pages/login", {
    title: "Login - GrowX",
  });
}

module.exports = {
  renderLoginPage,
};
