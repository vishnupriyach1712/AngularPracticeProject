import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { SharedModuleModule } from 'src/app/SharedModule/shared-module/shared-module.module';
import { ListUserComponent } from '../list-user/list-user.component';
import { ExcelModule, GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { HttpClientModule } from '@angular/common/http';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { EditUserComponent } from 'src/app/Admin/edit-user/edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
  {
    path: 'adminDash',
    component: AdminDashboardComponent,
    children: [
      {
        path: 'list',
        component: ListUserComponent,
      },
      {
        path: 'editUser',
        component: EditUserComponent,
      }
    ]
  },
];

@NgModule({
  declarations: [
    AdminDashboardComponent,
    ListUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    GridModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputsModule,
    PDFModule,
    ExcelModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminDashboardModule { 
  constructor(){
    console.log("Admin dashboard loaded")
  }
}
