import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-fieldset',
  template: `<div nz-form-item nz-col [nzSpan]="to.divCol">
          <div nz-form-label nz-col [nzSm]="to.lblCol">
              <label>{{to.label}}</label>
          </div>
          <div nz-form-control nz-col [nzSm]="to.inputCol">
              <ng-template #fieldComponent></ng-template>
          </div>
   </div>
  `,
})
export class FormlyWrapperFieldset extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}
