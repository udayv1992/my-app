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
    term:string="";

    column:string="";
    order:string="";
    limit:number=0;
    page:number=0;
    filter(){
      this._studentidService.getfilteredStudents(this.term).subscribe(
        (data:any)=>{
          this.students = data;
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
    }
    sort(){
      this._studentidService.getSortedStudents(this.column, this.order).subscribe(
        (data:any)=>{
          this.students = data;
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
    }
    pagination(){
      this._studentidService.getPagedStudents(this.limit, this.page).subscribe(
        (data:any)=>{
          this.students = data;
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
    }
    delete(name:string){
      this._studentidService.deleteStudents(name).subscribe(
        (data:any)=>{
          alert("deleted successfully");
          location.reload();//to reload the page automatically
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
    }
}
