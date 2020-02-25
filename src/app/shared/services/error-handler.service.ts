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

  handleSuccessError(successResponse: HttpResponse<BaseResponse>) {
    if (successResponse.body.hasError) {
      // TODO: Add unauthorize status Code
      if (successResponse.body.errors[0].code === 0) {
        this.logout();
        this.router.navigateByUrl(MainRoutes.HOME)
      }
      this.descreaseShowLoaderCount(successResponse);
      this.commonMatDialogService.openCommonDialog(successResponse.body.errors[0].message, ModalTypes.ERROR);
    }
  }

  handleHttpError(errorResponse: HttpErrorResponse) {
    this.descreaseShowLoaderCount(errorResponse);
    if (errorResponse.status === 401) {
      this.logout();
      this.router.navigateByUrl(MainRoutes.HOME)
    }
    this.commonMatDialogService.openCommonDialog('Server was unable to handle the request', ModalTypes.ERROR);
  }

  descreaseShowLoaderCount(response: HttpResponse<BaseResponse> | HttpErrorResponse) {
    if (response.headers.get(HeaderKeys.SHOW_LOADER) === HeaderKeyValues.BOOLEAN_TRUE) {
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
