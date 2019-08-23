import { Component, OnInit,Input } from '@angular/core';
import { DataorderService } from '../dataorder.service';
import { DatacustomerService } from '../datacustomer.service';
import {HttpClient} from '@angular/common/http';
import { OrderModel } from "../models/order.model";


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
@Input () customer
customerOrdersProduct
customerOrdersPrice
noOrder = false
thisCustomer
order:OrderModel
  constructor(private http : HttpClient,private orderdata : DataorderService,) {
  }

  ngOnInit() {
     
        this.thisCustomer = this.customer.id
        console.log (this.thisCustomer)
        this.findOrder ()
        console.log (this.order)
  }
  findOrder = () => {
    this.orderdata.getApi('getOrder/'+this.thisCustomer).subscribe((res:any)=> {
      if(res.error){
        this.noOrder = true;
        
      }
      else {
        this.order =res.order;
      }
    })
}
}  
