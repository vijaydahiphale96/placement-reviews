import { Component } from '@angular/core';
import { MainRoutes } from './shared/enums/routes.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  MainRoutes = MainRoutes;
}
