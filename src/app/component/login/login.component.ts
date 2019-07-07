import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators }   from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  formGroup: FormGroup;
 constructor(private formBuilder: FormBuilder) { }
  
 ngOnInit() {
  this.createForm();
}

createForm() {
  this.formGroup = this.formBuilder.group({
    'username': ['', Validators.required],
    'password': ['', Validators.required],
  });
}


getError(el) {
  switch (el) {
    case 'user':
      if (this.formGroup.get('username').hasError('required')) {
        return 'Username required';
      }
      break;
    case 'pass':
      if (this.formGroup.get('password').hasError('required')) {
        return 'Password required';
      }
      break;
    default:
      return '';
  }
}

}
