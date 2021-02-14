import { ConfigOption } from '@ngx-formly/core';
import {
  FormlyFieldInput,
  FormlyFieldCheckbox,
  FormlyFieldSearchInput,
  FormlyTestInput,
  FormlyFieldGrid
} from './types/types';
import {
  FormlyWrapperFieldset,
} from './wrappers/wrappers';

export const FIELD_TYPE_COMPONENTS = [
  // types
  FormlyFieldInput,
  FormlyFieldCheckbox,
  FormlyFieldSearchInput,
  // wrappers
  FormlyWrapperFieldset,
  FormlyTestInput,
  FormlyFieldGrid
];

export const ZORRO_FORMLY_CONFIG: ConfigOption = {
  types: [
    {
      name: 'input',
      component: FormlyFieldInput,
      //wrappers: ['fieldset'],
    },
    {
      name: 'checkbox',
      component: FormlyFieldCheckbox,
      //wrappers: ['fieldset'],
    },{
      name:'search',
      component:FormlyFieldSearchInput
    },{
      name:'grid',
      component:FormlyFieldGrid
    }
  ],
  wrappers: [
    {name: 'fieldset', component: FormlyWrapperFieldset} 
  ],
  validationMessages: [
             { name: 'required', message: 'This field is1 required' }
          ] 
};