import { Component } from '@angular/core';
import { DummyDisplayComponent } from './dummy-display/dummy-display.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DummyDialogDisplayComponent } from './dummy-dialog-display/dummy-dialog-display.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  panelOpenState = false;
  constructor(private _bottomSheet: MatBottomSheet, private _dialog:MatDialog) {}
  openBottomSheet(): void {
    this._bottomSheet.open(DummyDisplayComponent);
  }

  
  openDialog(): void {
    const dialogRef = this._dialog.open(DummyDialogDisplayComponent, {
      width:"500px",
      height:'300px',
      disableClose:true,
      data: {name: "Abc", phone: 7893029517},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
     
    });

  }
}
