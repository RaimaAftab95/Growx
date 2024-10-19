/**
 * Renders Home page
 * @param {import('express').Request} req Request
 * @param {import('express').Response} res Response
 */
function renderNFTDetailsPage(req, res) {
  const { id } = req.params;

  if (!id) {
    res.redirect("/explore");
    return;
  }

  res.render("pages/nft-details", {
    title: "NFT Details - GrowX",
  });
}

module.exports = {
  renderNFTDetailsPage,
};
