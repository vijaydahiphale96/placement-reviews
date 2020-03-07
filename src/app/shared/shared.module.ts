import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { CommonDialogModule } from './modules/common-dialog/common-dialog.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonDialogModule,
    HttpClientModule
  ],
  providers: [
    CookieService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  exports: [

  ]
})
export class SharedModule { }
