import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {
  @Input() max:number=0;
          textvalue:string="";
          // this.length=this.textvalue.length
        count(){
          console.log(this.textvalue);
        }
}
