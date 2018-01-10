import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './child.html'
})
export class ChildComponent {
    constructor(public act: ActivatedRoute) {
        console.log(this.act.snapshot.params.name)
    }
}