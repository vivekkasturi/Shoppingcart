import { set } from '@ember/object';
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed, action } from '@ember/object';

export default class CartController extends Controller {
  @service cart;

  @computed('cart.cartItems')
  get subTotal() {
    return this.cart.cartItems.reduce((a, b) => {
      return a + b.price * b.quantity;
    }, 0);
  }

  @computed('subTotal')
  get tax() {
    return Math.round(0.08 * this.subTotal);
  }

  @computed('subTotal', 'tax')
  get totalAmount() {
    return Math.round(this.subTotal + this.tax);
  }

  @action
  delete(item) {
    console.log(item);

    set(
      this,
      'cart.cartItems',
      this.cart.cartItems.filter((deletedItem) => {
        if (deletedItem.id != item.id) return true;
      }),
    );
  }

  @action
  modifiedQuantity(item, value) {
    this.cart.cartItems.map((a) => {
      if (a.id === item.id) {
        a.quantity = parseInt(value.target.value);
      }
    });
    this.set('cart.cartItems', [...this.cart.cartItems]);
  }
}
