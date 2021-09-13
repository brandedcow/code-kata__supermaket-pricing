class OrderItem {
  constructor() {
    this.item = null
    this.quantity = 0
    this.multiplier = 1
  }

  applyPromo(codes) {
    for (let code of codes) {
      if (code.affects(this.item.getId())) {
        this.multiplier = code.getMultiplier()
      }
    }
  }

  getPrice() {
    return this.item.getPrice() * this.multiplier * this.quantity
  }
}