const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
const Item = require('./Item')

const randomName = () => uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); // big_red_donkey
const randomPrice = () => Math.floor(Math.random() * (5-1) + 1)

const supermarketData = new Array(3).fill(null)
  .map(() => new Item(randomName(), randomPrice()))

module.exports = supermarketData