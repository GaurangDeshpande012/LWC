/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import { LightningElement ,track} from 'lwc';
import Lead from '@salesforce/schema/Lead';
import Preference1__c from '@salesforce/schema/Lead.Preference1__c';
import Phone from '@salesforce/schema/Lead.Phone';
import Email from '@salesforce/schema/Lead.Email';
import  First_Name__c from '@salesforce/schema/Lead.First_Name__c';
import  Last_Name__c from '@salesforce/schema/Lead.Last_Name__c';
//import {ShowToastEvent} from 'lightning/platformShowToastEvent';


export default class FlatBooked extends LightningElement 

{ 
    /*@track ledRecord = {
        
        First_Name__c:First_Name__c,
        Last_Name__c:Last_Name__c,
        Email:Email,
        Phone :Phone,
        
    };*/

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

   /* createrecord(event)
    {
        saveLead({objAcc: this.ldRecord})
        .then(result => {
            // Clear the user enter values
            this.ldRecord = {};

            window.console.log('result ===> '+result);
            // Show success messsage
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success!!',
                message: 'Lead Created Successfully!!',
                variant: 'success'
            }),);
        })
        .catch(error => {
            this.error = error.message;
        });
    }*/


    
    handleClick(){
    //alert("Hi Salesforce");
        this.dispatchEvent(new CustomEvent('submitforflatbook'));
       // console.log('Working');
    }

}






