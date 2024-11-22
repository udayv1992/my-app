import { Component } from '@angular/core';
import { BankaccountsService } from '../bankaccounts.service';

@Component({
  selector: 'app-bankaccounts',
  templateUrl: './bankaccounts.component.html',
  styleUrls: ['./bankaccounts.component.css']
})
export class BankaccountsComponent {
  
  accounts:any = [];
  term:string = "";

  constructor(private _bankAccountsService:BankaccountsService){
    _bankAccountsService.getAccounts().subscribe(
      (data:any) =>{
        this.accounts = data;
      },
      (err:any) =>{
        alert("internal server error")
      }
    )
  }
  filter(){
    this._bankAccountsService.getfilteredAccounts(this.term).subscribe(
      (data:any) =>{
        this.accounts = data;
      },
      (err:any) =>{
        alert("internal server error")
      }
    )
  }
  column:string="";
    order:string="";
  
  sort(){
    this._bankAccountsService.getSortedAccounts(this.column, this.order).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  delete(id:string){
    this._bankAccountsService.deleteAccounts(id).subscribe(
      (data:any)=>{
        alert("deleted successfully");
        location.reload();//to reload the page automatically
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
limit:number=0;
page:number=0;

  pagination(){
    this._bankAccountsService.getPagedAccounts(this.limit, this.page).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
}
