import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainRoutes } from './shared/enums/routes.enum';
import { Router, NavigationStart, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  MainRoutes = MainRoutes;
  selectedMenu: string;

  routerEventSubcribtion: Subscription;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.getRouterEventSubcribtion();
  }

  getRouterEventSubcribtion() {
    this.routerEventSubcribtion = this.router.events.subscribe((eventData: RouterEvent) => {
      if (eventData instanceof NavigationStart) {
        this.setActiveMenu(eventData);
      }
    });
  }

  setActiveMenu(eventData: NavigationStart) {
    const routesArray = eventData.url.split('/');
    if (routesArray.includes(this.MainRoutes.HOME)) {
      this.selectedMenu = this.MainRoutes.HOME;
    } else if (routesArray.includes(this.MainRoutes.DASHBOARD)) {
      this.selectedMenu = this.MainRoutes.DASHBOARD;
    } else if (routesArray.includes(this.MainRoutes.COMPANIES)) {
      this.selectedMenu = this.MainRoutes.COMPANIES;
    }
  }

  ngOnDestroy() {
    this.routerEventSubcribtion.unsubscribe();
  }
}
