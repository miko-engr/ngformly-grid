import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { DialogDataExampleDialog } from '../types/dialog/dialog-data-example';

import {FieldType} from '@ngx-formly/core';

@Component({
    selector: 'formly-field-search-input',
    template: `
     <div nz-form-item nz-col [nzXs]="24" [nzMd]="12" [nzSm]="24"  [nzLg]="to.divCol" [ngStyle]="{'margin-bottom':'8px','height':'42px'}">
            <div nz-form-label nz-col [nzSm]="to.lblCol"  [nzMd]="to.lblCol" [nzXs]="24">
                <label *ngIf="to.required" [title]="to.label" nz-form-item-required>{{to.label}}</label>
                <label *ngIf="!to.required" [title]="to.label">{{to.label}}</label>
            </div>
             <div nz-form-control nz-col [nzSm]="to.inputCol" [nzMd]="to.inputCol" [nzXs]="24">
                <nz-input [nzType]="'search'" [nzPlaceHolder]="to.placeholder"
                          [formControl]="formControl" [formlyAttributes]="field" (nzOnSearch)="openDialog()"></nz-input>
                <div nz-form-explain *ngIf="showError" role="alert" [id]="validationId">
                    <formly-validation-message [fieldForm]="formControl" [field]="field"></formly-validation-message>
                </div>
            </div>
        </div>
    `,
    host: { }
})
export class FormlyFieldSearchInput extends FieldType {
  value:any;
  constructor(public dialog: MatDialog) {
    super()
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogDataExampleDialog, {
      width: '250px',
      height:'400px',
      data: {'userid':this.formControl.value ? this.formControl.value : ""}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.formControl.setValue(result.userid);
      this.form.patchValue({username: result.username});
    });
  }
}