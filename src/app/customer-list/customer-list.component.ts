import { Component, OnInit } from '@angular/core';
import { DatacustomerService } from '../datacustomer.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers;
  t:String = "card";
  faUser = faUser;

  constructor(private data: DatacustomerService) { }

  ngOnInit() {
    this.customers = this.data.customers;
  }

  changeView = (t) => {
    this.t = t;
    console.log(t)
  }

}
