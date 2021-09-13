import { v4 as uuidv4 } from 'uuid'

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

export default PromoCode