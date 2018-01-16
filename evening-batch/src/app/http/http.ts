import { Component } from '@angular/core';
import { Http, URLSearchParams, Headers, RequestOptions } from "@angular/http";

@Component({
    selector: 'app-http',
    template: '<button (click)="call()">click</button>'
})
export class HttpCom{
    params: URLSearchParams = new URLSearchParams();
    header;
    options;
    constructor( private http:Http){
        this.params.set('base', 'INR');
        this.header = new Headers();
        this.options = new RequestOptions({
            headers: this.header,
            search: this.params
        })
    }
    call(){
        this.http.get('https://api.fixer.io/latest', this.options).subscribe(data=>{
            console.log(data.json());
        })
    }
}