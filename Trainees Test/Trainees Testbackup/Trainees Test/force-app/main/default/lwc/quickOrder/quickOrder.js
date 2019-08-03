/* eslint-disable vars-on-top */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import { LightningElement, api,track,wire } from 'lwc';
import AccountName from '@salesforce/schema/Order.AccountId';
import Product from '@salesforce/schema/Order.Product__c';
import Contract from '@salesforce/schema/Order.ContractId';
import status from '@salesforce/schema/Order.Status';
import Startdate from '@salesforce/schema/Order.EffectiveDate';
import { NavigationMixin } from 'lightning/navigation';
import getProdData from '@salesforce/apex/productclass.getProdData';
//import productvid from '@salesforce/apex/productclass.productvid';




export default class QuickOrder extends NavigationMixin(LightningElement)  {

 

@track header ;
@track vidurl ;
@api id;
@track produrl;

  
  //@track proid;
    
    Acc=AccountName;
    Pro=Product;
    con=Contract;
    sta=status;
    date=Startdate;

    navigatetoorder(event) {
        //alert(event.detail.id);
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
              recordId: event.detail.id,
                objectApiName: 'Order',
                actionName: 'view'
            }
        });
    }
  
    handleproduct(event)
    {
     // console.log("Aanchal Data:",event);
      this.produrl = '';
      this.oldUrl = '';
      this.vidurl = '';
        this.id =event.target.value;
        //alert(this.id);
      
        getProdData({proid : event.target.value })
       .then(result => {
        this.produrl = result.purl;
        this.vidurl = result.vurl;
        this.header = result.head;
        
        
        
    }) .catch(error => {
        
    });
     /*
    productvid({vidId:this.id})
    .then(result => {
      this.vidurl = result;
      this.oldUrl = this.vidurl;
    }) .catch(error => {
    });*/
}

handleClick() {
  const modal = this.template.querySelector('c-modal');
  modal.show();
}

handleCancelModal() {
  const modal = this.template.querySelector('c-modal');
  this.vidurl = '';
// console.log("IFRAME DATA:",iframe);
  modal.hide();
}

    


  
  
}