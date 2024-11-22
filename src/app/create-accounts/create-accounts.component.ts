import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BankaccountsService } from '../bankaccounts.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.css']
})
export class CreateAccountsComponent {
  constructor(private _bankAccountsService:BankaccountsService){}
  public AccountsForm:FormGroup = new FormGroup(
    {
      account_name: new FormControl(),
      available_balance: new FormControl(),
      account_number: new FormControl(),
      city: new FormControl(),
      profile_picture: new FormControl(),



    }
  )
  
  submit(){
    console.log(this.AccountsForm);
    this._bankAccountsService.createAccounts(this.AccountsForm.value).subscribe(
      (data:any)=>{
        alert("created successfully");
      },
      (err:any)=>{
        alert("creation failed");
      }
    )

    
  }
    
 
}
