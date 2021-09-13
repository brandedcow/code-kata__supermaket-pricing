class PromoCode {
  constructor(percentage, targets) {
    this.targets = targets
    this.multiplier = (100 - percentage) / 100
  }

  affects(itemId) {
    return this.targets.includes(itemId)
  }

  getMultiplier() {
    return this.multiplier
  }
}

export default PromoCode