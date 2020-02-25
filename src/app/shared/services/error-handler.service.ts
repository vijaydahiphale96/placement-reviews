import { Injectable } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { BaseResponse } from '../models/base-response.model';
import { Router } from '@angular/router';
import { MainRoutes } from '../enums/routes.enum';
import { UserDataService } from './user-data.service';
import { CommonMatDialogService } from './common-mat-dialog.service';
import { ModalTypes } from '../enums/modal-types.enum';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private router: Router,
    private userDataService: UserDataService,
    private commonMatDialogService: CommonMatDialogService
  ) { }

  handleSuccessError(successResponse: HttpResponse<BaseResponse>) {
    if (successResponse.body.hasError) {
      // TODO: Add unauthorize status Code
      if (successResponse.body.errors[0].code === 0) {
        this.logout();
        this.router.navigateByUrl(MainRoutes.HOME)
      }
      // TODO: Decrease Loader Count if SHOW_LOADER = true
      this.commonMatDialogService.openCommonDialog(successResponse.body.errors[0].message, ModalTypes.ERROR);
    }
  }

  handleHttpError(error: HttpErrorResponse) {
    // TODO: Decrease Loader Count if SHOW_LOADER = true
    if (error.status === 401) {
      this.logout();
      this.router.navigateByUrl(MainRoutes.HOME)
    }
    this.commonMatDialogService.openCommonDialog('Server was unable to handle the request', ModalTypes.ERROR);
  }

  logout() {
    this.userDataService.logout();
  }
}
