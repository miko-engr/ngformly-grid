  
  import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-grid',
  template:`<ag-grid-angular
        #agGrid
        style="width: 100%; height: 120px;"
        class="ag-fresh"
        [columnDefs]="to.columnDefs"
        (cellEditingStopped)="columnValueChanged($event)"
        [rowData]="to.rowData"></ag-grid-angular> 
   `,
  host: {
  },
})
export class FormlyFieldGrid extends FieldType {
  // get type() {
  //   return this.to.type || 'text';
  // }
  ngOnInit() {
    this.formControl.patchValue(this.to.rowData);
  }

  columnValueChanged({ api }) {
    const rowData = [];
    api.forEachNode((node) => rowData.push(node.data));

    this.formControl.patchValue(rowData);
  }
}
