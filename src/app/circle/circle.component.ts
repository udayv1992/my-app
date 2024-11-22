import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  num1:number = 3.14;
  num2:number = 0;
  result:number = 0;
  area(){
    this.result = this.num1 * this.num2 * this.num2;
  }
  perimeter(){
    this.result = 2 * this.num1 * this.num2;
  }
}