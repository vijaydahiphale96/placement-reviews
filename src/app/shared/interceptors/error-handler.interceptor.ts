import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ErrorHandlerService } from '../services/error-handler.service';
import { BaseResponse } from '../models/base-response.model';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(
    private errorHandlerService: ErrorHandlerService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.errorHandlerService.increaseShowLoaderCount(request);

    return next.handle(request).pipe(
      tap({
        next: (successResponse: HttpResponse<BaseResponse>) => {
          if (successResponse instanceof HttpResponse) {
            this.errorHandlerService.handleSuccessError(successResponse);
          }
        },
        error: (error: HttpErrorResponse) => {
          if (error instanceof HttpErrorResponse) {
            this.errorHandlerService.handleHttpError(error);
          }
        },
        complete: () => {
          // TODO: Check Loading Indicator Status and Hide Loader if Count = 0
        }
      })
    );
  }
}
