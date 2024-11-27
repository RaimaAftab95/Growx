/**
 * Renders the explore page
 * @param {import('express').Request} _req Request
 * @param {import('express').Response} res Response
 */
function renderExplorePage(_req, res) {
  function nftGenerator() {
    const nfts = [];

    for (let i = 1; i < 8; i++) {
      nfts.push({
        id: i,
        name: `NFT ${i}`,
        image: `http://localhost:1111/assets/images/nfts/featured-${i}.jpeg`,
        url: `/nft/${i}`,
        price: Math.floor(Math.random() * 1000),
        author: {
          name: `Author ${i}`,
          avatar: `http://localhost:1111/assets/images/avatar/avatar-box-0${i}.jpg`,
          url: `/author/${i}`,
        },
      });
    }

    return nfts;
  }

  res.render("pages/explore", {
    title: "Explore",
    nfts: nftGenerator(),
  });
}

module.exports = {
  renderExplorePage,
};
