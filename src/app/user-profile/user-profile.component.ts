import { Component } from '@angular/core';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  profiles:any = [];
  constructor(private _profileService:UserProfileService){
    _profileService.getProfile().subscribe(
      (data:any)=>{
        this.profiles = data;
        console.log(this.profiles)
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
}
