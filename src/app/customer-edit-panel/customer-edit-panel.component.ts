import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-edit-panel',
  templateUrl: './customer-edit-panel.component.html',
  styleUrls: ['./customer-edit-panel.component.css']
})
export class CustomerEditPanelComponent implements OnInit {
  displayView:String = "detail";

  constructor() { }

  ngOnInit() {
  }

}
