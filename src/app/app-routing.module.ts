import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainRoutes } from './shared/enums/routes.enum';


const routes: Routes = [
  { path: '', redirectTo: MainRoutes.DASHBOARD, pathMatch: 'full' },
  {
    path: MainRoutes.DASHBOARD,
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: MainRoutes.HOME,
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: MainRoutes.COMPANIES,
    loadChildren: () => import('./pages/companies/companies.module').then(m => m.CompaniesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
