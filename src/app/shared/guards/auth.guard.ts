import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataService } from '../services/user-data.service';
import { CommonObjectService } from '../services/common-object.service';
import { MainRoutes } from '../enums/routes.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private userDataService: UserDataService,
    private CommonObjectService: CommonObjectService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userDataService.accessToken) {
      return true
    } else {
      this.CommonObjectService.currentlySelectedMenu = MainRoutes.HOME
      this.router.navigate([MainRoutes.HOME]);
      return false;
    }
  }

}
