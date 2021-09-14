class OrderItem {
  constructor(item, quantity) {
    this.item = item
    this.quantity = quantity
    this.modifiers = [
      function getRegularPrice() {
        return this.item.price * this.quantity
      }
    ]
  }

  getItemId() {
    return this.item.id
  }

  addModifier(newFunction) {
    this.modifiers = [...this.modifiers, newFunction]
  }

  getPrice() {
    let lowestPrice = Number.MAX_SAFE_INTEGER
    for (let modifier of this.modifiers) {
      const tentativePrice = modifier()
      if (tentativePrice < lowestPrice) {
        lowestPrice = tentativePrice
      }
    }
    return lowestPrice
  }
}

module.exports = OrderItem