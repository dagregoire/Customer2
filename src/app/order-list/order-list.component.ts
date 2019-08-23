import { Component, OnInit, Input } from '@angular/core';
import { DataorderService } from '../dataorder.service';
import { DatacustomerService } from '../datacustomer.service';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})

export class OrderListComponent implements OnInit {


customer

  
  constructor(private ordersdata : DataorderService, private customerdata : DatacustomerService) { 
    this.customer = this.customerdata.customers;
    
   
    
  
}
  
  ngOnInit() {
 

  }
}
