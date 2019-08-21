import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: FormGroup = this.lg.group({
    email:['',[Validators.required, Validators.pattern("^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.(net|com|fr)$")]],
    password:['', [Validators.required, Validators.pattern("([a-zA-Z0-9]*)([0-9]+)([a-zA-Z0-9]*)"), Validators.minLength(6)]]
  })

  constructor(private lg: FormBuilder) { }

  valider = () => {
    console.dir(this.login);
    console.dir(this.login.value.password);
  }
  
}
