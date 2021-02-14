import {
    AfterViewChecked, AfterViewInit, Component, EventEmitter, Input,forwardRef, OnChanges, OnDestroy, OnInit,
    Output
} from '@angular/core';
import { ControlValueAccessor,NG_VALUE_ACCESSOR } from '@angular/forms';
import {GridOptions} from 'ag-grid'; 
export const EXE_GRID_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ApesGridComponent),
    multi: true
};
@Component({
  selector: 'apes-grid',
  templateUrl: './apes-grid.component.html',
  styles: [],
  providers: [EXE_GRID_VALUE_ACCESSOR]
})

export class ApesGridComponent  implements ControlValueAccessor ,OnChanges, AfterViewChecked, OnInit, OnDestroy {
   // public finalGridOptions: GridOptions;
    
    @Input() gridOptions: GridOptions;

    @Input('gridRowData')
    public gridRowData: any;

    @Input('columnDefs')
    public columnDefs: any;


    @Output() public apesGridReady: EventEmitter<any> = new EventEmitter();
    @Output() public apesCellValueChanged: EventEmitter<any> = new EventEmitter();
    localeText: any;

    get returnData() {
        return this.gridRowData;
    }

    set returnData(value: any) {
        this.gridRowData = value;
        this.propagateChange(this.gridRowData);
    }

    constructor() {
    }

    ngOnInit() {
       //
    }
    ngOnChanges() {
       //this.refreshRowModel(this.gridRowData);
    }
    ngAfterViewChecked() {
       //
    }
    ngOnDestroy() {
       //
    }
    public onGridReady($event): void {
       this.apesGridReady.emit($event);
    }
    private onCellValueChanged($event) {
        console.log('onCellValueChanged: ' + $event.oldValue + ' to ' + $event.newValue);
        this.apesCellValueChanged.emit($event);
    }

     propagateChange = (_: any) => { };

    writeValue(value: any) {
        if (value !== undefined) {
            this.gridRowData = value;
        }
    }

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any) { }

}
