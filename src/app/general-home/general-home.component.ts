import { Product } from './../product/Product';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-general-home',
  templateUrl: './general-home.component.html',
  styleUrls: ['./general-home.component.css']
})
export class GeneralHomeComponent implements OnInit {

  products;
  constructor() { }

  ngOnInit(): void {
  }

}
