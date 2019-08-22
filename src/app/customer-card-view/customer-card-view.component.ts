import { Component, OnInit, Input } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { DatacustomerService } from '../datacustomer.service';

@Component({
  selector: 'app-customer-card-view',
  templateUrl: './customer-card-view.component.html',
  styleUrls: ['./customer-card-view.component.css']
})
export class CustomerCardViewComponent implements OnInit {
  @Input() customer;
  faEdit = faEdit;

  constructor(private data: DatacustomerService) { }

  ngOnInit() {
  }

}
