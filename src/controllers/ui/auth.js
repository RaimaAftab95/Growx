/**
 * Renders Login page
 * @param {import('express').Request} _req Request
 * @param {import('express').Response} res Response
 */
function renderLoginPage(_req, res) {
  res.render("pages/auth/login", {
    title: "Login - GrowX",
  });
}

/**
 * Renders Register page
 * @param {import('express').Request} _req Request
 * @param {import('express').Response} res Response
 */
function renderRegisterPage(_req, res) {
  res.render("pages/auth/register", {
    title: "Register - GrowX",
  });
}

module.exports = {
  renderLoginPage,
  renderRegisterPage,
};
