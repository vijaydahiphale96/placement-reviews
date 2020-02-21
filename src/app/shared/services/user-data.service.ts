import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserData } from '../enums/user-data.enum';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private cookieService: CookieService
  ) { }

  public logout() {
    this.cookieService.delete(UserData.ACCESS_TOKEN, ' / ');
    this.cookieService.deleteAll();
  }

  public get userId(): number {
    return parseInt(this.cookieService.get(UserData.USER_ID), 10);
  }
  public set userId(value: number) {
    this.cookieService.set(UserData.USER_ID, value.toString(), 365, '/');
  }

  public get isAdmin(): boolean {
    return (this.cookieService.get(UserData.IS_ADMIN) === 'true');
  }
  public set isAdmin(value: boolean) {
    this.cookieService.set(UserData.IS_ADMIN, value.toString(), 365, '/');
  }

  public get accessToken(): string {
    return this.cookieService.get(UserData.ACCESS_TOKEN);
  }
  public set accessToken(value: string) {
    this.cookieService.set(UserData.ACCESS_TOKEN, value, 365, '/');
  }

}
