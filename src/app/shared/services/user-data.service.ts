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
    this.cookieService.set('userId', value + '', 3, '/');
  }

}
