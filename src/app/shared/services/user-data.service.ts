import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserCookieData } from '../enums/user-data.enum';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private cookieService: CookieService
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

}
