import { Component, OnInit,Input } from '@angular/core';
import { DataorderService } from '../dataorder.service';
import { DatacustomerService } from '../datacustomer.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
@Input () order : any
  constructor(private dataorder : DataorderService,private customers : DatacustomerService) { }

  ngOnInit() {
  }

}
