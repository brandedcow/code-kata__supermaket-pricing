class OrderItem {
  constructor() {
    this.item = null
    this.quantity = 0
  }

  getPrice() {
    return this.item.getPrice() * this.quantity
  }
}