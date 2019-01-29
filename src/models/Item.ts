import { Model } from '@vuex-orm/core'

export default class Item extends Model {
  static entity = 'items'

  static fields () {
    return {
      id: this.number(0),
      name: this.string(''),
      cartQuantity: this.number(0),
      priceInCents: this.number(0)
    }
  }
}
