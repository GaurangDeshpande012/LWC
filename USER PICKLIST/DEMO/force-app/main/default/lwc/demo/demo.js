/* eslint-disable no-alert */
import { LightningElement, api } from 'lwc';

export default class Demo extends LightningElement {

@api recordId;
@api objectApiName

handleSuccess()
{

    alert('Success Called ');
}
}