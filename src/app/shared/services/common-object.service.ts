import { Injectable } from '@angular/core';
import { MainRoutes } from '../enums/routes.enum';

@Injectable({
  providedIn: 'root'
})
export class CommonObjectService {

  currentlySelectedMenu: string = MainRoutes.DASHBOARD;

  showLoaderCount: number = 0;

  constructor() { }
}
