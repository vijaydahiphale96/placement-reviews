import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserDataService } from '../services/user-data.service';
import { Router } from '@angular/router';
import { MainRoutes } from '../enums/routes.enum';
import { HeaderKeys, HeaderKeyValues } from '../enums/headers.enum';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private userDataService: UserDataService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.headers.get(HeaderKeys.AUTH) === HeaderKeyValues.AUTH_TRUE) {
      const clonedRequest = request.clone({
        headers: request.headers.set(HeaderKeys.ACCESS_TOKEN, this.userDataService.accessToken)
      });
      return next.handle(clonedRequest);
    } else {
      return next.handle(request);
    }
  }
}
