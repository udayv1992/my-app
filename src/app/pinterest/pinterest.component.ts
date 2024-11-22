import { Component } from '@angular/core';
import { PinterestService } from '../pinterest.service';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.css']
})
export class PinterestComponent {
  photos:any=[];
  constructor(private _pinterestService:PinterestService){
    _pinterestService.getPhotos().subscribe(
      (data:any)=> {
        this.photos = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
}
}
