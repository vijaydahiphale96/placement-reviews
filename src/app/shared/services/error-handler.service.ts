import { Injectable } from '@angular/core';
import { HttpResponse, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { BaseResponse } from '../models/base-response.model';
import { Router } from '@angular/router';
import { MainRoutes } from '../enums/routes.enum';
import { UserDataService } from './user-data.service';
import { CommonMatDialogService } from './common-mat-dialog.service';
import { ModalTypes } from '../enums/modal-types.enum';
import { HeaderKeys, HeaderKeyValues } from '../enums/headers.enum';
import { CommonObjectService } from './common-object.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private router: Router,
    private userDataService: UserDataService,
    private commonObjectService: CommonObjectService,
    private commonMatDialogService: CommonMatDialogService
  ) { }

  handleSuccessError(request: HttpRequest<unknown>, successResponse: HttpResponse<BaseResponse>) {
    if (successResponse.body.hasError) {
      // TODO: Add unauthorize status Code
      if (successResponse.body.error.code === 0) {
        this.logout();
        this.router.navigateByUrl(MainRoutes.HOME)
      }
      this.openErrorDialog(successResponse.body.error.message, request.headers.get(HeaderKeys.DISPLAY_ERROR));
    }
    this.descreaseShowLoaderCount(request);
  }

  handleHttpError(request: HttpRequest<unknown>, errorResponse: HttpErrorResponse) {
    this.descreaseShowLoaderCount(request);
    if (errorResponse.status === 401) {
      this.logout();
      this.router.navigateByUrl(MainRoutes.HOME)
      this.openErrorDialog('Unauthorized !! Try to login again', request.headers.get(HeaderKeys.DISPLAY_ERROR));
    } else {
      this.openErrorDialog('Server was unable to handle the request', request.headers.get(HeaderKeys.DISPLAY_ERROR));
    }

  }

  openErrorDialog(erroMessage: string, displayError: string) {
    if (displayError === HeaderKeyValues.BOOLEAN_TRUE) {
      this.commonMatDialogService.openCommonDialog(erroMessage, ModalTypes.ERROR);
    }
  }

  descreaseShowLoaderCount(request: HttpRequest<unknown>) {
    if (request.headers.get(HeaderKeys.SHOW_LOADER) === HeaderKeyValues.BOOLEAN_TRUE) {
      this.commonObjectService.showLoaderCount--;
    }
  }

  increaseShowLoaderCount(request: HttpRequest<unknown>) {
    if (request.headers.get(HeaderKeys.SHOW_LOADER) === HeaderKeyValues.BOOLEAN_TRUE) {
      this.commonObjectService.showLoaderCount++;
    }
  }

  logout() {
    this.userDataService.logout();
  }
}
