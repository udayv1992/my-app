import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  products:any=[];
  constructor(private _productService:FlipkartService){
    _productService.getProducts().subscribe(
      (data:any)=> {
        this.products = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
}
