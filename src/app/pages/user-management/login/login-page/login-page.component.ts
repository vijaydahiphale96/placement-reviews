import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  hidePassword: boolean = true;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.generateLoginForm();
  }

  generateLoginForm() {
    this.loginForm = this.formBuilder.group({
      emailId: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
    });
  }

}
