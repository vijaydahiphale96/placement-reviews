import { Component, OnInit, OnDestroy } from '@angular/core';
import { animate, style, transition, trigger, state } from "@angular/animations";
import { MainRoutes } from './shared/enums/routes.enum';
import { Router, NavigationStart, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonObjectService } from './shared/services/common-object.service';
import { UserDataService } from './shared/services/user-data.service';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        height: '*'
      })),
      state('out', style({
        opacity: '0',
        height: '0px'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {

  MainRoutes = MainRoutes;
  routerEventSubcribtion: Subscription;

  menuAnimationState: string;

  constructor(
    private router: Router,
    public commonObjectService: CommonObjectService,
    public userDataService: UserDataService
  ) { }

  ngOnInit() {
    this.menuAnimationState = 'out';
    this.getRouterEventSubcribtion();
  }

  getRouterEventSubcribtion(): void {
    this.routerEventSubcribtion = this.router.events.pipe(
      filter(event => event instanceof NavigationStart)).subscribe(
        (eventData: RouterEvent) => {
          this.setActiveMenu(eventData);
        });
  }

  setActiveMenu(eventData: NavigationStart): void {
    const routesArray = eventData.url.split('/');
    if (routesArray.includes(this.MainRoutes.HOME)) {
      this.commonObjectService.currentlySelectedMenu = this.MainRoutes.HOME;
    } else if (routesArray.includes(this.MainRoutes.DASHBOARD)) {
      this.commonObjectService.currentlySelectedMenu = this.MainRoutes.DASHBOARD;
    } else if (routesArray.includes(this.MainRoutes.COMPANIES)) {
      this.commonObjectService.currentlySelectedMenu = this.MainRoutes.COMPANIES;
    } else if (routesArray.includes(this.MainRoutes.LOGIN)) {
      this.commonObjectService.currentlySelectedMenu = this.MainRoutes.LOGIN;
    } else if (eventData.url === '/') {
      if (this.userDataService.accessToken) {
        this.commonObjectService.currentlySelectedMenu = this.MainRoutes.DASHBOARD;
      } else {
        this.commonObjectService.currentlySelectedMenu = this.MainRoutes.HOME;
      }
    } else {
      this.commonObjectService.currentlySelectedMenu = ''
    }
  }

  changeMenuCollapsibleStatus(): void {
    this.menuAnimationState = this.menuAnimationState === 'out' ? 'in' : 'out';
  }

  async logout() {
    await this.userDataService.logout();
    this.userDataService.clearUserCookieData();
    this.changeMenuCollapsibleStatus();
    this.router.navigate([MainRoutes.HOME]);
  }

  ngOnDestroy() {
    this.routerEventSubcribtion.unsubscribe();
  }
}
