import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  public studentForm:FormGroup = new FormGroup(
    {
      name:new FormControl(),
      age:new FormControl(),
      email:new FormControl(),
      phone:new FormControl(),
      address: new FormGroup({
        city:new FormControl(),
        pin:new FormControl()
      }),
    })
  }

