class Order {
  constructor() {
    this.orderItems = []
    this.total = 0
    this.promoCodes = []
  }

  getTotalPrice() {
    return this.total = this.orderItems.reduce((subTotal, orderItem) => {
      const orderItemPrice = orderItem.applyPromo(this.promoCodes).getPrice()
      return subTotal + orderItemPrice
    }, 0)
  }
}