import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

      user:User = {name:'a', age:20,
        address:{
          city:'hyd',
          pin:399993
        },
        phones:[9494,8500]
      };
}
