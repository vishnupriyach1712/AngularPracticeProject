import { Injectable } from '@angular/core';
import { Users } from 'src/app/Models/UserData';
import {usersData} from 'src/constants/const-data';


@Injectable({
  providedIn: 'root'
})
export class DataManagementService {
  users: Users[];

  //user:any[];
  constructor() { }

  Init() {
 
  return new Promise<void>((resolve, reject) => {
        console.log("AppInitService.init() called",usersData);
        this.users= usersData.user;
        resolve();
    });
  }

  addUser(userEntered: Users){
    this.users.push(userEntered);
  }

  findUserByEmail(email:string)
  {
    let retUser : Users ={
      email:"null",
      userName:"null",
      password:"null",
      isAdmin: false,
      contact: "null",
      skills :[],
      role:""
  };

    this.users.forEach(user => {
      if(user.email == email)
      {
        retUser =  user;
      }

    })
    return retUser;
  }


  updateUser(userdeatails: Users)
  {
    let retUser : Users ={
      email:"null",
      userName:"null",
      password:"null",
      isAdmin: false,
      contact: "null",
      skills :[],
      role:""
  };
  for(let i = 0; i <this.users.length ; i++ )
  {
    if(this.users[i].email == userdeatails.email)
    {
      this.users[i] =  {...this.users[i], ...userdeatails}
      return this.users[i];
    }
  }
  return retUser;
  }
}
