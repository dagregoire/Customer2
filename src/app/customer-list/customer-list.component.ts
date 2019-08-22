import { Component, OnInit } from '@angular/core';
import { DatacustomerService } from '../datacustomer.service';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers;
  faIdCard = faIdCard;
  faBars = faBars;
  faPlus = faPlus;

  constructor(private data:DatacustomerService) { }

  ngOnInit() {
    this.customers = this.data.customers
  }

}
