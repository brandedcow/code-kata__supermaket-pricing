const { v4: uuidv4 } = require('uuid')

class Item {
  constructor(name, price) {
    this.id = `item-${uuidv4()}` 
    this.name = name
    this.price = price
  }

  getPrice() {
    return this.price
  }
}

module.exports = Item