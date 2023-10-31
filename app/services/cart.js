import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CartService extends Service {
  @tracked cartItems = [];

  @tracked lengthOfCart=this.cartItems.length; 
  
}
