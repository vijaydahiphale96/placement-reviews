import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HeaderKeys, HeaderKeyValues } from '../enums/headers.enum';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(
    private http: HttpClient
  ) { }

  post<T>(
    url: string,
    postparams: any,
    isAuthorizationRequired: boolean,
    showLoader: boolean,
    displayError: boolean,
  ): Observable<T> {

    const commonHttpHeaderOptions = this.getHttpHeaders(isAuthorizationRequired, showLoader, displayError)
    return this.http.post<T>(url, postparams, commonHttpHeaderOptions);
  }

  put<T>(
    url: string,
    postparams: any,
    isAuthorizationRequired: boolean,
    showLoader: boolean,
    displayError: boolean,
  ): Observable<T> {
    const commonHttpHeaderOptions = this.getHttpHeaders(isAuthorizationRequired, showLoader, displayError)
    return this.http.put<T>(url, postparams, commonHttpHeaderOptions);
  }

  get<T>(
    url: string,
    isAuthorizationRequired: boolean,
    showLoader: boolean,
    displayError: boolean,
  ): Observable<T> {
    const commonHttpHeaderOptions = this.getHttpHeaders(isAuthorizationRequired, showLoader, displayError)
    return this.http.get<T>(url, commonHttpHeaderOptions);
  }

  getHttpHeaders(isAuthorizationRequired: boolean, showLoader: boolean, displayError: boolean) {
    return {
      headers: new HttpHeaders({
        [HeaderKeys.CONTENT_TYPE]: HeaderKeyValues.CONTENT_TYPE_JSON,
        [HeaderKeys.AUTH]: isAuthorizationRequired === true ? HeaderKeyValues.BOOLEAN_TRUE : HeaderKeyValues.BOOLEAN_FALSE,
        [HeaderKeys.SHOW_LOADER]: showLoader === true ? HeaderKeyValues.BOOLEAN_TRUE : HeaderKeyValues.BOOLEAN_FALSE,
        [HeaderKeys.DISPLAY_ERROR]: displayError === true ? HeaderKeyValues.BOOLEAN_TRUE : HeaderKeyValues.BOOLEAN_FALSE
      })
    };
  }

}
