import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { SharedModuleModule } from 'src/app/SharedModule/shared-module/shared-module.module';
import { ListUserComponent } from '../list-user/list-user.component';


const routes: Routes = [
  {
    path: 'adminDash',
    component: AdminDashboardComponent,
    children: [
      {
        path: 'list',
        component: ListUserComponent,
      }
    ]
  },
];

@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminDashboardModule { 
  constructor(){
    console.log("Admin dashboard loaded")
  }
}
