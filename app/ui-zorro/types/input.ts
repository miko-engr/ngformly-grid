import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-input',
  template:`
  <div nz-form-item nz-col [nzXs]="24" [nzMd]="12" [nzSm]="24" [nzLg]="to.divCol" [ngStyle]="{'margin-bottom':'8px','height':'42px'}">
          <div nz-form-label nz-col [nzSm]="to.lblCol"  [nzMd]="to.lblCol" [nzXs]="24">
              <label style="height:10px" *ngIf="to.required" nz-form-item-required>{{to.label}}</label>
              <label style="height:10px" *ngIf="!to.required">{{to.label}}</label>
          </div>
          <div nz-form-control nz-col [nzSm]="to.inputCol" [nzMd]="to.inputCol" [nzXs]="24">
              <ng-select [searchable]="false"  [formControl]="formControl" [formlyAttributes]="field" style="height:28px"> 
                <ng-option [value]="true">Yes</ng-option>
                <ng-option [value]="false">No</ng-option>
         </ng-select>
              <div nz-form-explain *ngIf="showError"  [id]="validationId">
                  <formly-validation-message [fieldForm]="formControl" [field]="field" ></formly-validation-message>
              </div>
          </div>      
   </div>
   `,
  host: {
  },
})
export class FormlyFieldInput extends FieldType {
  // get type() {
  //   return this.to.type || 'text';
  // }
}