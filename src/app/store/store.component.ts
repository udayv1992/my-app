import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  name:string = "";
  price:number= 0;
  rating:number = 0;
  delivery:boolean = false;
  products:any = [
    {name:'pen', price:10, rating:3, delivery:true},
    {name:'phone', price:100, rating:2, delivery:false},
    {name:'shirt', price:400, rating:4, delivery:true},
    {name:'mobile', price:200, rating:5, delivery:false}

  ]
  delete(i:number){
    this.products.splice(i,1);
  }
  term:string = "";
search(){
  this.products = this.products.filter((product:any)=>product.name.includes(this.term));

}

filter(){
  this.products = this.products.filter((product:any)=>product.delivery == true);
}

pricelow(){
  this.products = this.products.sort((a:any,b:any)=>b.price-a.price);
}

pricehigh(){
  this.products = this.products.sort((a:any,b:any)=>a.price-b.price);
}

ratinglow(){
  this.products = this.products.sort((a:any,b:any)=>b.rating-a.rating);
}

ratinghigh(){
  this.products = this.products.sort((a:any,b:any)=>a.rating-b.rating);
}

discount(){
  this.products = this.products.map((product:any)=>{
    product.price=product.price*0.5;
    return product;
  });
}

charges(){
  this.products = this.products.map((product:any)=>{
    product.price=product.price + 80;
    return product;
  });
}

total(){
  let total = this.products.reduce((sum:any,product:any)=>sum+product.price,0);
  alert(total);
}

items(){
  let items = this.products.length;
  alert(items);
}

add(){
  let product = {
    name:this.name,
    price:this.price,
    rating:this.rating,
    delivery:this.delivery
  }
  this.products.unshift(product);
}
}
