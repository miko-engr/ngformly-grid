import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'formly-test-input',
    template: `
       <div>test</div>
    `,
    host: { }
})
export class FormlyTestInput extends FieldType {
   
}
