import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataService } from '../services/user-data.service';
import { MainRoutes } from '../enums/routes.enum';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

  constructor(private router: Router,
    private userDataService: UserDataService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userDataService.isAdmin) {
      return true
    } else {
      this.router.navigate([MainRoutes.DASHBOARD]);
      return false;
    }
  }

}
