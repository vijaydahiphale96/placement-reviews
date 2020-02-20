import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private cookieService: CookieService
  ) { }

  public get userId(): number {
    return parseInt(this.cookieService.get('userId'), 10);
  }
  public set userId(value: number) {
    this.cookieService.set('userId', value.toString(), 365, '/');
  }

  public get isAdmin(): boolean {
    return (this.cookieService.get('isAdmin') === 'true');
  }
  public set isAdmin(value: boolean) {
    this.cookieService.set('isAdmin', value.toString(), 365, '/');
  }

  public get accessToken(): string {
    return this.cookieService.get('accessToken');
  }
  public set accessToken(value: string) {
    this.cookieService.set('accessToken', value, 365, '/');
  }

}
