import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserCookieData } from '../enums/user-data.enum';
import { UserLoginCredential } from '../models/user.model';
import { RestApiService } from './rest-api.service';
import { environment } from 'src/environments/environment';
import { BaseResponse } from '../models/base-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  baseUrl = environment.baseUrl;

  constructor(
    private cookieService: CookieService,
    private restApiService: RestApiService
  ) { }

  public logout() {
    this.cookieService.delete(UserCookieData.ACCESS_TOKEN, ' / ');
    this.cookieService.deleteAll();
  }

  public get userId(): number {
    return parseInt(this.cookieService.get(UserCookieData.USER_ID), 10);
  }
  public set userId(value: number) {
    this.cookieService.set(UserCookieData.USER_ID, value.toString(), 365, '/');
  }

  public get isAdmin(): boolean {
    return (this.cookieService.get(UserCookieData.IS_ADMIN) === 'true');
  }
  public set isAdmin(value: boolean) {
    this.cookieService.set(UserCookieData.IS_ADMIN, value.toString(), 365, '/');
  }

  public get accessToken(): string {
    return this.cookieService.get(UserCookieData.ACCESS_TOKEN);
  }
  public set accessToken(value: string) {
    this.cookieService.set(UserCookieData.ACCESS_TOKEN, value, 365, '/');
  }

  login(loginData: UserLoginCredential): Promise<BaseResponse> {
    return this.restApiService.post<BaseResponse>(
      this.baseUrl.concat('/login'),
      loginData,
      false,
      true,
      true
    ).toPromise()
  }

}
