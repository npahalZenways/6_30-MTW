import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AppComponent } from './app.component';
import { LayoutComponent } from "./layout/layout.component";
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from "@angular/router";
import { ChildComponent } from "./child/child";
import { HttpCom } from "./http/http";
import { HttpModule } from "@angular/http";
import { LoginService } from "./test.service";
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LayoutComponent,
    ChildComponent,
    HttpCom
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'layout',
      pathMatch: 'full'
    },{
      path: 'layout',
      component: LayoutComponent,
      // these are child routes if layout path, its output will be displayed in router-outlet placed inside layout component
      children: [{
        path: '',
        redirectTo: 'child/98765',
        pathMatch:'full'
      },{
        path: 'child/:name',
        component: ChildComponent
      }]
    },{
      path: 'register',
      component: RegistrationComponent
    }])
  ],
  providers: [LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
