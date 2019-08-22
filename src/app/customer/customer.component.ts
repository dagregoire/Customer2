import { Component, OnInit, Input } from '@angular/core';
import { DatacustomerService } from '../datacustomer.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Input() customer;
  @Input() view:string;
  faEdit = faEdit;

  constructor(private data: DatacustomerService) { }

  ngOnInit() {
  }
  
}
