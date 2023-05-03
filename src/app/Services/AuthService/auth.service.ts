import { Injectable } from '@angular/core';
import { DataManagementService } from '../DataManagement/data-management.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private dataManagemnetService: DataManagementService) {}

  IsLoggedIn(): string {
    if (!localStorage.getItem('expireTime')) {
      return '0';
    }
    return '' + localStorage.getItem('expireTime');
  }

  login(userName: string, password: string) {
    let user = this.dataManagemnetService.findUserByEmail(userName);
    if (user.password!= "null" && user.password == password) {
      let expTime = Date.now() + 3600000;
      localStorage.setItem('email',user.email);
      localStorage.setItem('expireTime', expTime.toString());
      localStorage.setItem('userName', user.userName);
      localStorage.setItem('isAdmin', user.isAdmin.toString());
    }
    return user;
  }
}
