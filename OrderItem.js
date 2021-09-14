class OrderItem {
  constructor(item, quantity) {
    this.item = item
    this.quantity = quantity
  }

  getItemId() {
    return this.item.id
  }

  getPrice() {
    return this.item.getPrice() * this.quantity
  }
}

module.exports = OrderItem