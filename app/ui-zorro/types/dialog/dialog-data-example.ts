import { Component, OnInit, DoCheck, ChangeDetectorRef, OnDestroy, Inject, AfterViewInit } from '@angular/core';
import { Field } from '@ngx-formly/core';
import { Subject } from 'rxjs/Subject';
import { FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
 
@Component({
  selector: 'dialog-data-example-dialog',
  template: `<h1 mat-dialog-title>Hi {{data}}</h1>
        <div mat-dialog-content>
          <p>What's your favorite animal?</p>
          <mat-form-field>
            <input matInput placeholder="'userid'"  [(ngModel)]="data.userid">
          </mat-form-field>
          <mat-form-field>
            <input matInput placeholder="'username'"  [(ngModel)]="data.username">
          </mat-form-field>
        </div>
        <div mat-dialog-actions>
          <button mat-button (click)="onNoClick()">No Thanks</button>
          <button mat-button [mat-dialog-close]="data" cdkFocusInitial>Ok</button>
   </div>`
})
export class DialogDataExampleDialog{
  constructor(
    public dialogRef: MatDialogRef<DialogDataExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

}