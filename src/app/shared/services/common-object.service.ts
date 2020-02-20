import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonObjectService {

  currentlySelectedMenu: string;

  constructor() { }
}
