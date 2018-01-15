import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from "./login.service";
import { HomeChildComponent } from './home-child/home-child.component';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HomeChildComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,    
    RouterModule.forRoot([{
      path:'',
      redirectTo: 'login',
      pathMatch:'full'
    },{
      path: 'home',
      component: HomeComponent,
      children: [{
        path: 'child',
        component: HomeChildComponent
      }]
    }, {
      path: 'login',
      component: LoginComponent
    }])
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
