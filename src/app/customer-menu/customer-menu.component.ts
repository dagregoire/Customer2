import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-menu',
  templateUrl: './customer-menu.component.html',
  styleUrls: ['./customer-menu.component.css']
})
export class CustomerMenuComponent implements OnInit {
  faIdCard = faIdCard;
  faBars = faBars;
  faPlus = faPlus;
  @Output() t:EventEmitter<String> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeView = (t) => {
    this.t.emit(t);
  }

}
