import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';



export default class CheckoutController extends Controller {


 @tracked
 trackig_no="PRODUCTID"+Math.floor(Math.random()*10000);

    
}
