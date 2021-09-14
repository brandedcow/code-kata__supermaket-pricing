const PromoCode = require('./PromoCode')

class PercentPromoCode extends PromoCode {
  constructor(start, end, targets, percentOff) {
    super(start, end, targets)
    
    this.modifier = function getPercentOffPrice() {
      const multiplier = (100 - percentOff) / 100
      const result = this.item.getPrice() * multiplier
      return +result.toFixed(2)
    }
  }
}

module.exports = PercentPromoCode