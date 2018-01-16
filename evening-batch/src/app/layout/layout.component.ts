import { Component } from "@angular/core";
import { LoginService } from "../test.service";

@Component({
    templateUrl: './layout.html'
})
export class LayoutComponent {
    // Dependency injection
    constructor(myTest:LoginService) {
        
    }
}