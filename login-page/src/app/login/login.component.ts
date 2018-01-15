import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "../login.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }
  login(uname, key){
    if(uname == 'admin' && key == 'admin@123'){
      this.router.navigate(['home']);
      this.loginService.setUserLoggedIn(true);
      sessionStorage.setItem('userLogin', 'true');
    } else {
      console.log('Invalid credentials')
    }
  }
  ngOnInit() {
  }

}
