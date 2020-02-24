import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { animate, style, transition, trigger, state } from "@angular/animations";
import { MainRoutes } from './shared/enums/routes.enum';
import { Router, NavigationStart, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonObjectService } from './shared/services/common-object.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        overflow: 'hidden',
        height: '*'
      })),
      state('out', style({
        opacity: '0',
        overflow: 'hidden',
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
    public commonObjectService: CommonObjectService
  ) { }

  ngOnInit() {
    this.getRouterEventSubcribtion();
    this.menuAnimationState = 'out';
  }

  getRouterEventSubcribtion(): void {
    this.routerEventSubcribtion = this.router.events.subscribe((eventData: RouterEvent) => {
      if (eventData instanceof NavigationStart) {
        this.setActiveMenu(eventData);
      }
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
    }
  }

  changeMenuCollapsibleStatus(): void {
    this.menuAnimationState = this.menuAnimationState === 'out' ? 'in' : 'out';
  }

  ngOnDestroy() {
    this.routerEventSubcribtion.unsubscribe();
  }
}
