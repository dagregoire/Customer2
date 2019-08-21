import { Component, OnInit } from '@angular/core';
import { DatacustomerService } from '../datacustomer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers
  constructor(private data:DatacustomerService) { }

  ngOnInit() {
    this.customers = this.data.customers
  }

}
