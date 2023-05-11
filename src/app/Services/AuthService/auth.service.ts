import { Injectable } from '@angular/core';
import { DataManagementService } from '../DataManagement/data-management.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private dataManagemnetService: DataManagementService) {}

  loginInfo={
   email : "",
   expTime : "",
   userName : "",
   isAdmin : ""
  }

  IsLoggedIn(): string {
    let info= JSON.parse(localStorage.getItem('loginInfo') || '{}');
    console.log("IsLoggedIn called with :", info);
    if (!info.expTime) {
      console.log(" 00000000000 ",info.expTime)
      return '0';
    }
    return '' + info.expTime;
  }

  login(userName: string, password: string) {
    let user = this.dataManagemnetService.findUserByEmail(userName);
    console.log("login user :",user);
    if (user.password!= "null" && user.password == password) {
      let expTime = Date.now() + 360000000;
      this.loginInfo.expTime = expTime?.toString();
      this.loginInfo.email = user.email;
      this.loginInfo.userName = user.userName;
      this.loginInfo.isAdmin = user.isAdmin.toString();
      localStorage.setItem('loginInfo', JSON.stringify(this.loginInfo))
      console.log(JSON.stringify(this.loginInfo))
      // localStorage.setItem('email',user.email);
      // localStorage.setItem('expireTime', expTime?.toString());
      // localStorage.setItem('userName', user.userName);
      // localStorage.setItem('isAdmin', user.isAdmin.toString());
    }
    return user;
  }
}
