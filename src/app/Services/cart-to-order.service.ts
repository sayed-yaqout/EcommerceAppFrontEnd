import { Injectable } from '@angular/core';
import { Order } from '../order/order';
import { Product } from '../product/Product';

@Injectable({
  providedIn: 'root'
})
export class CartToOrderService {
order:Order
  constructor() { }
  makeOrder(_order:Order)
  {
      this.order=_order     // get order after cashout and save it in service object (order)
  }
  getOrder()                //give order to database or sabrina
  {
    return this.order;
  }
}
