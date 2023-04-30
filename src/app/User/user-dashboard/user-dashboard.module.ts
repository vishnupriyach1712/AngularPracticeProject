import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/SharedModule/shared-module/shared-module.module';
import { ProfilePageComponent } from 'src/app/SharedModule/Profile/profile-page/profile-page.component';

const routes: Routes = [
  {
    path: 'userDash',
    component: UserDashboardComponent,
    children: [
      {
        path: 'profile',
        component: ProfilePageComponent,
      }
    ]
  },
];


@NgModule({
  declarations: [
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModuleModule
  ]
})
export class UserDashboardModule {
  constructor(){
    console.log("User dashboard loaded")
  }
 }
