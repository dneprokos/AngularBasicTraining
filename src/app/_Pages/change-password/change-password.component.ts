import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PasswordValidators } from './change-password.validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
      this.form = fb.group({
        oldpassword: [
          '', 
          Validators.required, 
          PasswordValidators.validOldPassword],
        newpassword: ['', Validators.required],
        confirmpassword: ['', Validators.required]
      }, {
        validator: PasswordValidators.passwordsShouldMatch
      })
   }

  get oldpassword(){ return this.form.get('oldpassword');}
  get newpassword(){ return this.form.get('newpassword');}
  get confirmpassword(){ return this.form.get('confirmpassword');}
}
