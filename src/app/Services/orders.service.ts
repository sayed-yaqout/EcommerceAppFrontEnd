import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { Observable } from 'rxjs';
// import { Order } from '../order/Order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrders(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos/1");
  }

  // changeStuates(productid,value){
  //   return this.http.patch(`https://jsonplaceholder.typicode.com/todos/${productid}`,`${value}`);
  // }



}

