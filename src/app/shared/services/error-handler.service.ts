import { Injectable } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { BaseResponse } from '../models/base-response.model';
import { Router } from '@angular/router';
import { MainRoutes } from '../enums/routes.enum';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private router: Router,
    private userDataService: UserDataService
  ) { }

  handleSuccessError(successResponse: HttpResponse<BaseResponse>) {
    if (successResponse.body.hasError) {
      // TODO: Add unauthorize statatu Code
      if (successResponse.body.errors[0].code === 0) {
        this.logout();
        this.router.navigateByUrl(MainRoutes.HOME)
      }
      // TODO: Decrease Loader Count if SHOW_LOADER = True
      // TODO: Open Error Modal
    }
  }

  handleHttpError(error: HttpErrorResponse) {
    // TODO: Decrease Loader Count if SHOW_LOADER = True
    if (error.status === 401) {
      this.logout();
      this.router.navigateByUrl(MainRoutes.HOME)
    }
    // TODO: Open Error Modal
  }

  logout() {
    this.userDataService.logout();
  }
}
