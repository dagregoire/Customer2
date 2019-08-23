import { Component, OnInit } from '@angular/core';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-menu-edit',
  templateUrl: './customer-menu-edit.component.html',
  styleUrls: ['./customer-menu-edit.component.css']
})
export class CustomerMenuEditComponent implements OnInit {
  faIdCard = faIdCard;
  faBars = faBars;
  faPlus = faPlus;
  id:Number = 0;

  constructor() { }

  ngOnInit() {
  }

  valider = () => {
    
  }

}
