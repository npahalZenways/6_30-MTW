import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login.service";
import { Router } from "@angular/router";
import { Http, RequestOptions, URLSearchParams, Headers } from "@angular/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  params;
  options;
  header;
  constructor(private login: LoginService, private router: Router, private http:Http) { 
    this.params = new URLSearchParams();
    this.header = new Headers({
      'Content-type': 'application-json'
    });
    this.params.set('base', 'INR')
    this.options = new RequestOptions({
      search: this.params,
      headers: this.header
    });
  }
  logout(){
    sessionStorage.clear();
    this.login.setUserLoggedIn(false);
    this.router.navigate(['/login']);
  }
  callApi(){
    this.http.get('https://api.fixer.io/latest').subscribe(data=>{
      let response = data.json()
      console.log(response);
    }, err=>{
      console.log(err);
    })
  }
  callCustomApi(){
    this.http.get('https://api.fixer.io/latest', this.options).subscribe(data=>{
      let response = data.json();
      console.log(response);
    }, err=>{
      console.log(err);
    })
  }
  ngOnInit() {
    if(!this.login.getUserLoggedIn()){
      this.router.navigate(['/login'])
    }
  }

}
