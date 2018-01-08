import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My evening batch';
  imgsrc = "http://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/08/21/best-beaches-juno-florida.jpg.rend.hgtvcom.616.462.suffix/1491580936376.jpeg";
  print(name){
    this.title = name;
  }
  blue = 'red';
  test={
    new:''
  }
  link = 'http://www.google.com';
  col = 'color: red';
  arr = [{
    name: 'nitin',
    phone: 9876543
  }, {
      name: 'nitin',
      phone: 9876543
    }, {
      name: 'nitin',
      phone: 9876543
    }, {
      name: 'nitin',
      phone: 9876543
    }, {
      name: 'nitin',
      phone: 9876543
    }, {
      name: 'nitin',
      phone: 9876543
    }, {
      name: 'nitin',
      phone: 9876543
    }, {
      name: 'nitin',
      phone: 9876543
    }]

    multiArr = [
      [1,2,3,4,5],
      [5, 4, 3, 2, 1],
      [9,8,7,6,5]
    ]
}
