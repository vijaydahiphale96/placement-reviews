import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserLoginCredential, AccessToken } from 'src/app/shared/models/user.model';
import { UserDataService } from 'src/app/shared/services/user-data.service';
import { BaseResponse } from 'src/app/shared/models/base-response.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  hidePassword: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private userDataService: UserDataService
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

  async login() {
    if (this.loginForm.valid) {
      const loginData: UserLoginCredential =
        new UserLoginCredential(this.loginForm.controls.emailId.value, this.loginForm.controls.password.value);
      const userData: BaseResponse<AccessToken> = await this.userDataService.login(loginData);
      if (userData && userData.data) {
        console.log('userData', userData.data);
      }
    }
  }

}
