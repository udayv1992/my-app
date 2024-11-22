import { Component } from '@angular/core';
import { CarouselService } from '../carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  photos:any = [];
  constructor(private _carouselService:CarouselService){
    _carouselService.getPhotos().subscribe(
    (data:any)=>{
      this.photos = data;
    },
    (err:any)=>{
      alert("Internal server error")
    }
  )
  }
}
