import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMenuEditComponent } from './customer-menu-edit.component';

describe('CustomerMenuEditComponent', () => {
  let component: CustomerMenuEditComponent;
  let fixture: ComponentFixture<CustomerMenuEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMenuEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMenuEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
