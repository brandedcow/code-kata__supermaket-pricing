const { v4: uuidv4 } = require('uuid')
const isWithinInterval = require('date-fns/isWithinInterval')

class PromoCode {
  constructor(start = new Date(), end = new Date()) {
    this.id = uuidv4()
    this.startDate = start
    this.endDate = end
    this.targets = []
    this.modifier = price => price
  }
  
  isValid() {
    return isWithinInterval(
      new Date(),
      { start: this.startDate, end: this.endDate }
    )
  }

  affects(itemId) {
    return this.targets.includes(itemId)
  }

  getModifier() {
    return this.modifier
  }
}

module.exports = PromoCode