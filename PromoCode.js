const { v4: uuidv4 } = require('uuid')

class PromoCode {
  constructor() {
    this.id = uuidv4()
    this.targets = []
    this.modifier = () => {}
  }

  affects(itemId) {
    return this.targets.includes(itemId)
  }

  getModifier() {
    return this.modifier
  }
}

module.exports = PromoCode