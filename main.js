const util = require('util')
const add = require('date-fns/add')
const Order = require('./Order')
const OrderItem = require('./OrderItem')
const ConditionalPromoCode = require('./ConditionalPromoCode')
const supermarketData = require('./supermarketData')
const PercentPromoCode = require('./PercentPromoCode')

console.log("Listing", supermarketData)
const order = new Order()

const today = new Date()
const listOfTargets = [supermarketData[0].id]

const bogo = new ConditionalPromoCode(
  today,
  add(today, { month: 1 }),
  listOfTargets,
  orderItem => orderItem.quantity >= 2,
  function getBogoPrice() {
    const bogoItems = Math.floor(this.quantity / 2)
    const singleItems = this.quantity - (bogoItems  * 2)
    return this.item.getPrice() * (bogoItems + singleItems)
  }
)

const twentyPercentOff = new PercentPromoCode(
  today,
  add(today, { month: 1 }),
  listOfTargets,
  20
)

order.addItem(new OrderItem(supermarketData[0], 3))
order.addItem(new OrderItem(supermarketData[2], 3))

console.log("Total:", order.getTotalPrice())

order.addCode(twentyPercentOff)

// console.log(util.inspect(order, false, null, true))
console.log("Total with Code", order.getTotalPrice())