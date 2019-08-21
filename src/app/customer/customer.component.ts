import { Component, OnInit, Input } from '@angular/core';
import { DatacustomerService } from '../datacustomer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Input() customer;

  constructor(private data: DatacustomerService) { }

  ngOnInit() {
  }

}
