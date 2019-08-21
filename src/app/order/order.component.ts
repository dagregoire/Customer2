import { Component, OnInit,Input } from '@angular/core';
import { DataorderService } from '../dataorder.service';
import { DatacustomerService } from '../datacustomer.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
@Input () customer
order
idOrder :number = undefined





  constructor(private dataorder : DataorderService,private customers : DatacustomerService) {
    this.order = this.dataorder.orders
    
   }

  ngOnInit() {
   
    console.log (this.customer)
    console.log (this.order)
    console.log (this.idOrder)
  
    
  }

}
