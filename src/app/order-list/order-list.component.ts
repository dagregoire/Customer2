import { Component, OnInit, Input } from '@angular/core';
import { DataorderService } from '../dataorder.service';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  @Input () order : any
  constructor(private ordersdata : DataorderService) { }
  orders : any;
  ngOnInit() {
    this.orders = this.ordersdata.orders;
    console.log (this.orders);
  }

}
