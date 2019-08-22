import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-add-form',
  templateUrl: './customer-add-form.component.html',
  styleUrls: ['./customer-add-form.component.css']
})
export class CustomerAddFormComponent  {


  addForm: FormGroup = this.add.group({
    firstName:['',[Validators.required, Validators.pattern("^[a-zA-Z]+$"), Validators.minLength(3)]],
    lastName:['', [Validators.required, Validators.pattern("^[a-zA-Z]+$"), Validators.minLength(3)]],
    address:['', [Validators.required, Validators.pattern("^[0-9]+[a-zA-Z._-]+$")]],
    city:['', [Validators.required, Validators.pattern("^[a-zA-Z]+$"), Validators.minLength(4)]],
    state:['', [Validators.required]],

  })
  
  constructor(private add: FormBuilder) { }


}
