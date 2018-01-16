import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirectve]'
})
export class MyDirectveDirective {

  constructor(private element:ElementRef) { 
    // this.element.nativeElement.style.display = "none"
  }

  @HostListener('mouseenter') changeColor(){
    this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') changeBack(){
    this.element.nativeElement.style.backgroundColor = 'transparent';
  }
}
