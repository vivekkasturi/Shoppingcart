import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ProductsController extends Controller {
  @service cart;
  @tracked toggle = false;
  @tracked zoomedItem = null;

  @action
  addToCart(item) {
    if (this.cart.cartItems.length === 0) {
      this.cart.cartItems = [{ ...item, quantity: 1 }];
    } else {
      let existingCart = this.cart.cartItems.find((duplicateItem) => {
        return duplicateItem.id === item.id;
      });

      if (existingCart) {
        existingCart.quantity += 1;
        console.log(existingCart);
        this.cart.cartItems = [{ ...existingCart }];
      } else {
        this.cart.cartItems = [
          ...this.cart.cartItems,
          { ...item, quantity: 1 },
        ];
      }
    }
  }

  @tracked
  lengthOfCart = this.cart.lengthOfCart;

  // @tracked
  //  lengthOfCart(){

  //   return this.cart.cartItems.lengthOfCart;
  // }
  @action
  zoomIn(item) {
    this.toggle = true;
    this.zoomedItem = item;
  }

  @action
  zoomOut() {
    this.toggle = false;
  }
}
