class Order {
  constructor() {
    this.orderItems = []
    this.total = 0
    this.promoCodes = []
    this.limit = 3
  }

  addItem = (item) => {
    this.orderItems = [...this.orderItems, item]
  }

  addCode = (code) => {
    if (limit > 0) {
      this.promoCodes = [...this.promoCodes, code]
      limit -= 1
    }
  }

  applyPromo = (orderItem) => {
    for (let code of this.promoCodes) {
      if (code.affects(orderItem.getItemId())) {
        orderItem.addModifier(code.modifier)
      }
    }
    return orderItem
  }

  getTotalPrice() {
    this.total = 
      this.orderItems
        .map(this.applyPromo)
        .reduce((subTotal, orderItem) => {
          return subTotal + orderItem.getPrice()
        }, 0)

    return this.total
  }
}

module.exports = Order