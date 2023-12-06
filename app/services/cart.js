import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CartService extends Service {
  @tracked cartItems = [];
  @tracked uniqueItem;

  @action
  lengthOfCart() {
    return this.cartItems.length;
  }
}
