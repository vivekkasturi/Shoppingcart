import Controller from '@ember/controller';
import {action} from '@ember/object';
import {inject as service} from '@ember/service';
import {tracked} from '@glimmer/tracking';

export default class ProductsController extends Controller {


    @service cart;

    @action
    addToCart(item){

              console.log(item);


          this.cart.cartItems=[...this.cart.cartItems,item]
    };

    @tracked
    lengthOfCart=this.cart.cartItems.length;

}
