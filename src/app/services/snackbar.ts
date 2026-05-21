import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";



@Injectable({
    providedIn:'root'
})
export class SnackBarServices{



    constructor(
        private _snackBar:MatSnackBar
    ){}


opensanckBar(msg:string){
    this._snackBar.open(msg,'Close',{
        horizontalPosition:'left',
        verticalPosition:'top',
        duration:3000
    }
        
    )
}


}