class Order {
  constructor() {
    this.orderItems = []
    this.total = 0
  }

  getTotalPrice() {
    return this.total = this.orderItems.reduce((subTotal, orderItem) => {
      return subTotal + orderItem.getPrice()
    }, 0)
  }
}