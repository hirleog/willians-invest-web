import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardGuard } from './guards/dashboard-guard';

const routes: Routes = [
  {
    path: 'feature',
    loadChildren: () =>
      import('./feature/feature.module').then((m) => m.FeatureModule),
  },
  {
    path: 'dashboard',
    canActivate: [DashboardGuard],
    loadChildren: () =>
      import('./components/dashboard-view/dashboard-view.module').then(
        (m) => m.DashboardViewModule
      ),
  },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
