/**
 * Renders Home page
 * @param {import('express').Request} _req Request
 * @param {import('express').Response} res Response
 */
function renderHomePage(_req, res) {
  /**
   * Generates featured NFTs
   * @param {string} key
   * @returns {Array<Object>}
   */
  function generateNFTs(key) {
    const nfts = [];

    for (let i = 1; i < 8; i++) {
      nfts.push({
        id: i,
        name: `NFT ${i}`,
        image: `http://localhost:1111/assets/images/nfts/${key}-${i}.jpeg`,
        url: `/nft/${i}`,
        price: Math.floor(Math.random() * 1000),
        author: {
          name: `Author ${i}`,
          avatar: `http://localhost:1111/assets/images/avatar/avatar-box-0${i}.jpg`,
          url: `/author/${i}`,
        },
      });
    }

    return nfts.sort(() => Math.random() - 0.5);
  }

  res.render("index", {
    title: "GrowX",
    featuredNFTs: generateNFTs("featured"),
    trendingNFTs: generateNFTs("trending"),
  });
}

module.exports = {
  renderHomePage,
};
