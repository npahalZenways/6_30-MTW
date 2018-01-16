import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login.service";
import { Router } from "@angular/router";
import { Http, RequestOptions, URLSearchParams, Headers } from "@angular/http";
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  app = new AppComponent();
  params;
  options;
  header;
  query;
  name = 'Nitin';
  date = new Date();
  array = [{
    name: 'nitin',
    phone: 87654
  },
  {
    name: 'amit',
    phone: 87654
  },
  {
    name: 'Gaurav',
    phone: 87654
  },
  {
    name: 'praveen',
    phone:87654
  },
  {
    name:'shagun',
    phone:87654
  }]
  num = .9
  constructor(private login: LoginService, private router: Router, private http:Http, private appInject: AppComponent) { 
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

    setInterval(() => {
      console.log(`this is app from homeComponent: ${this.app.texrtFromApp}, and this is app from injection ${this.appInject.texrtFromApp}`)
    }, 2000);
  }

}
