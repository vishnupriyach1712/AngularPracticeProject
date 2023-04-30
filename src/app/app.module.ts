import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModuleModule } from './SharedModule/shared-module/shared-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateSetupModule } from './TranslateModule/translate.module';
import { DataManagementService } from './Services/DataManagement/data-management.service';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
import { ListUserComponent } from './Admin/list-user/list-user.component';


export function initializeAppData(dataInitService: DataManagementService) {
  return (): Promise<any> => { 
    return dataInitService.Init();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    TranslateSetupModule
  ],
  providers: [ 
    DataManagementService,
    { provide: APP_INITIALIZER,useFactory: initializeAppData, deps: [DataManagementService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
