const PromoCode = require('./PromoCode')
const PercentPromoCode = require('./PercentPromoCode')

const samplePromoCode = new PromoCode()
const extendedPromoCode = new PercentPromoCode(p => p * 0.8)

console.log(extendedPromoCode)