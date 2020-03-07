import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserCookieData } from '../enums/user-data.enum';
import { UserLoginCredential, AccessToken, UserData } from '../models/user.model';
import { RestApiService } from './rest-api.service';
import { environment } from 'src/environments/environment';
import { BaseResponse } from '../models/base-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  baseUrl = environment.baseUrl;
  userData: UserData;

  COOKIE_EXPIRE_DAYS: number = 90;
  COOKIE_BASE_PATH: string = '/';

  constructor(
    private cookieService: CookieService,
    private restApiService: RestApiService
  ) { }

  public get userId(): number {
    return parseInt(this.cookieService.get(UserCookieData.USER_ID), 10);
  }
  public set userId(value: number) {
    this.cookieService.set(UserCookieData.USER_ID, value.toString(), this.COOKIE_EXPIRE_DAYS, this.COOKIE_BASE_PATH);
  }

  public get roleId(): number {
    return parseInt(this.cookieService.get(UserCookieData.ROLE_ID), 10);
  }
  public set roleId(value: number) {
    this.cookieService.set(UserCookieData.ROLE_ID, value.toString(), this.COOKIE_EXPIRE_DAYS, this.COOKIE_BASE_PATH);
  }

  public get accessToken(): string {
    return this.cookieService.get(UserCookieData.ACCESS_TOKEN);
  }
  public set accessToken(value: string) {
    this.cookieService.set(UserCookieData.ACCESS_TOKEN, value, this.COOKIE_EXPIRE_DAYS, this.COOKIE_BASE_PATH);
  }

  public login(loginData: UserLoginCredential): Promise<BaseResponse<AccessToken>> {
    return this.restApiService.post<BaseResponse<AccessToken>>(
      this.baseUrl.concat('/login'),
      loginData,
      false,
      true,
      true
    ).toPromise();
  }

  public logout() {
    return this.restApiService.delete<BaseResponse<string>>(
      this.baseUrl.concat('/logout'),
      true,
      true,
      false
    ).toPromise();
  }

  public setUserData(userData: AccessToken) {
    this.userId = userData.user.userId;
    this.roleId = userData.user.roleId;
    this.accessToken = userData.accessToken;
  }

  public clearUserCookieData() {
    this.cookieService.delete(UserCookieData.ACCESS_TOKEN, ' / ');
    this.cookieService.deleteAll();
  }

}
