import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed, action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CartController extends Controller {
  // Sample cart items

  @service cart;

  @computed('this.cart.cartItems')
  get subTotal() {
    console.log('subTotal', this.cart.cartItems);
    if (this.cart.cartItems.length === 0) {
      return this.cart.cartItems.reduce((total, item) => {
        return Math.round((total + item.price * 1));
      }, 0);
    } else {
      return this.cart.cartItems.reduce((total, item) => {
        return Math.round(total + item.price * item.quantity);
      }, 0)
    }



  }

  get tax() {
    return Math.round((0.08 * this.subTotal));
  }

  get totalAmount() {
    return (Math.round((this.subTotal + this.tax)));
  }

  @action
  modifiedQuantity(item, item1) {

    console.log(item, item1.target.value);


    let updatedQuantity = this.cart.cartItems.find((quantity) => {
      if (quantity.id === item.id) {

        (quantity.quantity = parseInt(item1.target.value))

        return true;

        //return (quantity.quantity=parseInt(item1.target.value));
        //return this.set(this.cart.cartItems, 'quantity', parseInt(item1.target.value));



      }
    })

    let updatedQuantityArray = [];
    updatedQuantityArray.push(updatedQuantity);


    if (updatedQuantityArray) {

      this.cart.cartItems.forEach(element => {

        let matchingElement = updatedQuantityArray.find((updatedItem) => (updatedItem.id === element.id))

        console.log("here", matchingElement)

        if (matchingElement) {

          element.quantity = matchingElement.quantity

        }



      });
      console.log("to test", updatedQuantity);
    }


    console.log("updated Quantity:", updatedQuantity);
    console.log("updated cartItems:", this.cart.cartItems);


  };

  @action
  delete(item) {

    console.log(item);

    this.cart.cartItems = this.cart.cartItems.filter((deletedItem) => {
      if (deletedItem.id != item.id)
        return true
    })





  }


}
