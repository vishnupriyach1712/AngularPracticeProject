import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserFormComponent } from '../Register/register-user-form/register-user-form.component';
import { LoginFormComponent } from '../Login/login-form/login-form.component';
import { HomePageComponent } from '../Home/home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from 'src/app/SharedModule/shared-module/shared-module.module';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslateSetupModule } from 'src/app/TranslateModule/translate.module';

const routes: Routes = [

  {
    path: 'home',
    component: HomePageComponent,
    children: [
        {
           path: 'login',
           component: LoginFormComponent
        },
        {
           path: 'register',
           component: RegisterUserFormComponent
        }
    ]
  },
  {
    path: '',
    component: HomePageComponent,
  }
];


@NgModule({
  declarations: [
    LoginFormComponent,
    HomePageComponent,
    RegisterUserFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModuleModule,
    TranslateSetupModule,
    RouterModule.forChild(routes)
  ],
  exports :[
    HomePageComponent,
  ]
})
export class HomeModuleModule { }
