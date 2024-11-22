import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentidService {

  constructor(private _httpClient:HttpClient) { }
  getStudentid():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
  }
  
getfilteredStudents(term:string):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);
}
getSortedStudents(column:string, order:string):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&order="+order);
}

deleteStudents(id:string):Observable<any>{
  return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id);
}

getPagedStudents(limit:number, page:number):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit="+limit+"&page="+page);
}

}
