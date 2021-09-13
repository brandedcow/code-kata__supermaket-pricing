const PromoCode = require('./PromoCode')

class PercentPromoCode extends PromoCode {
  constructor(percentOff) {
    super()
    const multiplier = (100 - percentOff) / 100
    this.modifier = price => price * multiplier
  }
}

module.exports = PercentPromoCode