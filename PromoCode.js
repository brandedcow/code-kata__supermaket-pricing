const { v4: uuidv4 } = require('uuid')
const isWithinInterval = require('date-fns/isWithinInterval')

class PromoCode {
  constructor(start = new Date(), end = new Date(), targets) {
    this.id = uuidv4()
    this.startDate = start
    this.endDate = end
    this.targets = targets
    this.modifier = item => item
  }
  
  isValid = () => {
    return isWithinInterval(
      new Date(),
      { start: this.startDate, end: this.endDate }
    )
  }

  affects = (itemId) => {
    return this.targets.includes(itemId)
  }
}

module.exports = PromoCode