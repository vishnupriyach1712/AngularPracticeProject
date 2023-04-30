import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './HomeModule/Home/home-page/home-page.component';
import { AuthgaurdGuard } from './shared/authgaurd.guard';

const routes: Routes = [
  {
    path: 'admin',
    canActivate : [AuthgaurdGuard],
    data:{role:"admin"},
    loadChildren: () => import('./Admin/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule),
    pathMatch: 'prefix'
    
  },
  {
    path: 'user',
    //canActivate : [AuthgaurdGuard],
    loadChildren: () => import('./User/user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule),
    pathMatch: 'prefix'
  },
  {
    path: '**',
    loadChildren: () => import('./HomeModule/home-module/home-module.module').then(m => {console.log("loading home as shared");return m.HomeModuleModule}),
    pathMatch: 'prefix'
  },
  {
    path: '',
    loadChildren: () => import('./HomeModule/home-module/home-module.module').then(m => m.HomeModuleModule),
    pathMatch: 'prefix'

  }
  // {
  //   path: '',
  //   component: HomePageComponent,
  //   pathMatch: "full"
  // },
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
