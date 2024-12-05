import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  baseUrl:string = "/assets/data.json";
  // baseUrl:string = "https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";
  constructor(private _httpClient:HttpClient) { }
  getVehicles():Observable<any>{
return this._httpClient.get(this.baseUrl);
}
getVehicle(id:string):Observable<any>{
  return this._httpClient.get(this.baseUrl+"/"+id);
  }

getfilteredVehicles(term:string):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term);
}
getSortedVehicles(column:string, order:string):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+column+"&order="+order);
}

deleteVehicle(id:string):Observable<any>{
  return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+name);
}

getPagedVehicles(limit:number, page:number):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit="+limit+"&page="+page);
}
createVehicle(data:any):Observable<any>{
  return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data);
}
updateVehicle(id:string, data:any):Observable<any>{
  return this._httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id,data);
}

}
