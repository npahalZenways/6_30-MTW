import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  isUserLoggedIn : boolean = false;
  constructor() { 
    if (sessionStorage.userLogin == 'true'){
      this.isUserLoggedIn = true;
    }
  }
  setUserLoggedIn(value){
    this.isUserLoggedIn = value;
  }
  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
}
