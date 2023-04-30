import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../Header/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from '../Profile/profile-page/profile-page.component';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfilePageComponent,
  },
];

@NgModule({
  declarations: [
    HeaderComponent,
    ProfilePageComponent
  ],
  imports: [ 
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    HeaderComponent,
    ProfilePageComponent
  ]
})

export class SharedModuleModule {
  constructor(){
    console.log("Shared dashboard loaded")
  }
 }
