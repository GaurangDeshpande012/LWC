/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import { LightningElement ,track} from 'lwc';
import Lead from '@salesforce/schema/Lead';
import Preference1__c from '@salesforce/schema/Lead.Preference1__c';
import Phone from '@salesforce/schema/Lead.Phone';
import Email from '@salesforce/schema/Lead.Email';


export default class FlatBooked extends LightningElement 

{ 
    @track value = 'inProgress';

    salutationsList = [
        { label: 'None', value: 'None' },
        { label: 'Mr.', value: 'Mr.' },
        { label: 'Ms.', value: 'Ms.' },
        { label: 'Mrs.', value: 'Mrs.' },
        { label: 'Dr.', value: 'Dr.' },
        { label: 'Prof.', value: 'Prof.' },
    ];

    get salutationOptions() {
        return this.salutationsList;
    }



    @track value = 'Preference1__c';

    get options() {
        return [
            { label: '2BHK', value: '2BHK' },
            { label: '3BHK', value: '3BHK' },
            { label: '4BHK', value: '4BHK' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }


    handleClick(){
    alert("Hi Salesforce");
        this.dispatchEvent(new CustomEvent('Submit'));
        console.log('Working');
    }
}







