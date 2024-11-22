import { Component } from '@angular/core';
import { ImdbService } from '../imdb.service';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.css']
})
export class ImdbComponent {
  movies:any = [];
  constructor(private _imdbService:ImdbService){
    _imdbService.getImdb().subscribe(
      (data:any)=>{
        this.movies = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }
  getRating(rating:number){
    return Math.floor(rating)
  }
}
