const PromoCode = require('./PromoCode')

class ConditionalPromoCode extends PromoCode {
  constructor(start, end, targets, condition, modifier) {
    super(start, end, targets)
    this.condition = condition
    this.modifier = modifier
  }
}

module.exports = ConditionalPromoCode