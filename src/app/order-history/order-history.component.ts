import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/Services/orders.service';
import{ Order} from '../order/Order';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  actiondone:boolean
  orders
  constructor(private orderService :OrdersService) { }
  ngOnInit(): void {
    //call service to get all orders and equal respont to orders lis
    this.orderService.getOrders().subscribe(
      (respond)=>{
        console.log(respond)
        // this.orders=respond
      },
    (error)=>{
      console.log(error)
    });
    this.orders=
    [
      new Order(1,"sabrena1","2/23/2000",2444,["prodectname1"],"pending"),
      new Order(1,"sabrena2","2/23/2000",2444,["prodectname1"],"pending"),
      new Order(1,"sabrena3","2/23/2000",2444,["prodectname1"],"pending")
    ]
  }


}
