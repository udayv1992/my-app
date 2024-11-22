import { Component } from '@angular/core';
import { StudentidService } from '../studentid.service';

@Component({
  selector: 'app-studentid',
  templateUrl: './studentid.component.html',
  styleUrls: ['./studentid.component.css']
})
export class StudentidComponent {
    students:any = [];
    constructor(private _studentidService:StudentidService){
      _studentidService.getStudentid().subscribe(
        (data:any)=>{
          this.students = data;
        },
        (err:any)=>{
          alert("internal server error");
        }
      )
    }
}
