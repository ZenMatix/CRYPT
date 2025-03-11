require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      // url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
      url : 'https://eth-sepolia.g.alchemy.com/v2/h8EjlI3yUtKY36rWqLtUX6EZvkwjE7_R',
      accounts: ['4975fc3de98c0e5ee36478d3b77263b159df445e2c68a5ef148dff2c57e8616e'],
    },
  },
};