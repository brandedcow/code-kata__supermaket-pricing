class Order {
  constructor() {
    this.orderItems = []
    this.total = 0
    this.promoCodes = []
  }

  addItem = (item) => {
    this.orderItems = [...this.orderItems, item]
  }

  addCode = (code) => {
    this.promoCodes = [...this.promoCodes, code]
  }

  applyPromo = (orderItem) => {
    let modifiedOrderItem = orderItem
    for (let code of this.promoCodes) {
      if (code.affects(orderItem.getItemId())) {
        modifiedOrderItem.getPrice = code.modifier
      }
    }
    return modifiedOrderItem
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