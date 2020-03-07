import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { MatCommonModule } from 'src/app/shared/mat-common.module';
import { MatFormsModule } from 'src/app/shared/mat-forms.module';


@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatCommonModule,
    MatFormsModule
  ]
})
export class LoginModule { }
