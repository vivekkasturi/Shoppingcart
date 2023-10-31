import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default class CartController extends Controller {
  // Sample cart items

  @service cart;



  get subTotal() {
    console.log("subTotal",this.cart.cartItems)
    return this.cart.cartItems.reduce((total, item) => {
      return Math.round(total + item.price * this.cart.cartItems.length);
    }, 0);
  }

  get tax() {
    return 0.08 * this.subTotal;
  }

  get totalAmount() {
  
    return this.subTotal + this.tax;
  }


}
