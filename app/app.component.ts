import { Component, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { ColumnApi, GridApi } from "ag-grid";
@Component({
  selector: "my-app",
  template: `
    <formly-form
      [model]="model"
      [fields]="feild1"
      [options]="options"
      [form]="form"
    >
    </formly-form>

    <button (click)="submit()">post</button>
  `
})
export class AppComponent {
  private api: GridApi;
  private columnApi: ColumnApi;

  columnDefs;
  rowData;
  options = {};
  form = new FormGroup({ radio: new FormControl() });
  model: any = {};
  model1: any = {};
  feild1: FormlyFieldConfig[] = [
    {
      key: "grid",
      type: "grid",
      templateOptions: {
        columnDefs: [
          { field: "make", editable: true },
          { field: "sl", editable: true },
          { field: "price", editable: true },
          { field: "je", aggFunc: "sum", valueGetter: "data.sl * data.price" },
          { field: "style" },
          { field: "clothes" }
        ],
        rowData: [
          {
            make: "Toyota",
            sl: 1,
            price: 35000,
            je: 35000,
            style: "Smooth",
            clothes: "Jeans"
          },
          {
            make: "Ford",
            sl: 1,
            price: 35000,
            je: 35000,
            style: "Filthy",
            clothes: "Shorts"
          },
          {
            make: "Porsche",
            sl: 1,
            price: 35000,
            je: 35000,
            style: "Dirty",
            clothes: "Padded"
          }
        ]
      }
    }
  ];

  constructor() {
    this.columnDefs = [
      { field: "make", editable: true },
      { field: "sl", editable: true },
      { field: "price", editable: true },
      { field: "je", aggFunc: "sum", valueGetter: "data.sl * data.price" },
      { field: "style" },
      { field: "clothes" }
    ];
    // 行数据
    this.rowData = [
      {
        make: "Toyota",
        sl: 1,
        price: 35000,
        je: 35000,
        style: "Smooth",
        clothes: "Jeans"
      },
      {
        make: "Ford",
        sl: 1,
        price: 35000,
        je: 35000,
        style: "Filthy",
        clothes: "Shorts"
      },
      {
        make: "Porsche",
        sl: 1,
        price: 35000,
        je: 35000,
        style: "Dirty",
        clothes: "Padded"
      }
    ];
  }

  // options = [
  //     { value: 'jack', label: 'Jack' },
  //     { value: 'lucy', label: 'Lucy' },
  //     { value: 'disabled', label: 'Disabled', disabled: true }
  // ];

  1;

  submit() {
    alert(JSON.stringify(this.form.value));
  }

  onGridReady(params): void {
    this.api = params.api;
    this.columnApi = params.columnApi;
    this.api.sizeColumnsToFit();
  }
  getGridData() {
    this.api.stopEditing();
    let rowData = []; //this.gridOptions.rowData; 这个方法获取到的值为空
    this.api.forEachNode(node => {
      node.setDataValue("je", node.data["sl"] * node.data["price"]);
      rowData.push(node.data);
    });
    console.log(rowData);
    return rowData;
  }

  private onCellValueChanged($event) {
    console.log(
      "onApesCellValueChanged: " + $event.oldValue + " to " + $event.newValue
    );
  }
}
