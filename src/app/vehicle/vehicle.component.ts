import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
    vehicles:any =[];
    term:string="";

    column:string="";
    order:string="";
    constructor(private _vehicleService:VehicleService){
      _vehicleService.getVehicles().subscribe(
        (data:any)=>{
          this.vehicles = data;
        },
        (err:any)=>{
          alert('Internal server error');
        }
      )
    }
    filter(){
      this._vehicleService.getfilteredVehicles(this.term).subscribe(
        (data:any)=>{
          this.vehicles = data;
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
    }
    sort(){
      this._vehicleService.getSortedVehicles(this.column, this.order).subscribe(
        (data:any)=>{
          this.vehicles = data;
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
    }

    delete(id:string){
      this._vehicleService.deleteVehicle(id).subscribe(
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
      this._vehicleService.getPagedVehicles(this.limit, this.page).subscribe(
        (data:any)=>{
          this.vehicles = data;
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
    }
}
