import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditPanelComponent } from './customer-edit-panel.component';

describe('CustomerEditPanelComponent', () => {
  let component: CustomerEditPanelComponent;
  let fixture: ComponentFixture<CustomerEditPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerEditPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEditPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
