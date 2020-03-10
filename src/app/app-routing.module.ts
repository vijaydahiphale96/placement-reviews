import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainRoutes } from './shared/enums/routes.enum';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: MainRoutes.DASHBOARD, pathMatch: 'full' },
  {
    path: MainRoutes.DASHBOARD,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: MainRoutes.HOME,
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: MainRoutes.COMPANIES,
    loadChildren: () => import('./pages/companies/companies.module').then(m => m.CompaniesModule)
  },
  {
    path: MainRoutes.WRITE_REVIEW,
    loadChildren: () => import('./pages/write-review/write-review.module').then(m => m.WriteReviewModule)
  },
  {
    path: MainRoutes.LOGIN,
    loadChildren: () => import('./pages/user-management/login/login.module').then(m => m.LoginModule)
  },
  {
    path: MainRoutes.SIGN_UP,
    loadChildren: () => import('./pages/user-management/sign-up/sign-up.module').then(m => m.SignUpModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
