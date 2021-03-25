import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  carts=[];
  // Quantity=[]
  cashed=false;

  getItems(){
    console.log(this.carts);

    return this.carts;
  }

  constructor() { }
}


