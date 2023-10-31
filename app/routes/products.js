import Route from '@ember/routing/route';
import { productsList } from '../data/productsList';
export default class ProductsRoute extends Route {
  model() {
    return productsList;
  }
}
