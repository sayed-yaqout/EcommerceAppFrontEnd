import { Injectable } from '@angular/core';
import{Observable, Subject} from 'rxjs'
import { Product } from '../product/Product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  carts=[]
  // Quantity=[]
  cashed=false
  // subject1 = new Subject()
  // subject2= new Subject()
// sendMessage(product){
//   this.subject1.next(product);//triggering an event
// }
// getMessage(){
 
// return this.subject1.asObservable();
// }

// sendItemsToCart(items){
//   this.subject2.next(items);//on changes
//   }
  getItems(){
    return this.carts;
  }
  // getQuantity(){
  //   return this.Quantity;
  // }
  constructor() { }
}


