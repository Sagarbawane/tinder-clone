require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_URL =
  "https://eth-rinkeby.alchemyapi.io/v2/g0MsUmOcXtSd57BfJlWQzPGttoq_acIY";
const RINKEBY_PRIVATE_KEY =
  "758cb3d970820f1f375ecb7ae9cc6e12d65b771c133651530b4a334d7bb8e619";

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: ALCHEMY_API_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};
