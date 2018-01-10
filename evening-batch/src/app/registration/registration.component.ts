import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  // inputs: ['name']
})
export class RegistrationComponent implements OnInit {
  @Input() name;
  formInfo = {
    fname: '',
    lname: '',
    phone: ''
  }
  @Output() onOutput = new EventEmitter();
  constructor() { }
  submit(form){
    // console.log(form);
    this.formInfo = {
      fname: '',
      lname: '',
      phone: ''
    }
     // console.log(`First name is ${this.formInfo.fname} and last name is ${this.formInfo.lname}`)
  }
  ngOnInit() {
    this.onOutput.emit(this.formInfo);
  }

}
