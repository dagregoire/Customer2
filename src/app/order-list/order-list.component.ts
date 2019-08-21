import { Component, OnInit, Input } from '@angular/core';
import { DataorderService } from '../dataorder.service';
import { DatacustomerService } from '../datacustomer.service';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})

export class OrderListComponent implements OnInit {
 
order
customer
 
  
  constructor(private ordersdata : DataorderService, private customerdata : DatacustomerService) { 
    
  
}
  
  ngOnInit() {
   
    this.customer = this.customerdata.customers;
    this.order = this.ordersdata.orders;
       
   

    
  }

}
