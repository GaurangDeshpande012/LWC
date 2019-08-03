import { LightningElement,track,api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'


export default class Newcompt extends LightningElement {

    @api showCompanyName = false;
    

    @track feedbackId;
handleSuccess(event) {
this.feedbackId = event.detail.id;
}
@track areDetailsVisible = false;

handleChange(event) {
   
    this.areDetailsVisible = event.target.checked;
}
    updateVisibilityOfCompanyName(event){
        // eslint-disable-next-line no-console
        console.log('Update visibility called');
        //console.log(JSON.stringify(event));
        if(event){
            if(event.detail){
               if(event.detail.value ==='Corporate'){
                    this.showCompanyName = true;
               }
               /*if(event.detail.value ==='Personal'){
                this.showCompanyName=false;
           }*/
               else{
                   this.showCompanyName = false;
               }
            }
        }
    }




handleSuccess1(event){
    const toast = new ShowToastEvent({
                    title: 'Success',
                    message: 'Record Saved Successfully',
                });
    this.dispatchEvent(toast);

    this.resetFields(event);
}


resetFields(){
    // eslint-disable-next-line no-console
    console.log('reset field called');

    const inputFields = this.template.querySelectorAll(
           'lightning-input-field'
       );
       if (inputFields) {
           inputFields.forEach(field => {
               field.reset();
           });
       }





    }
}

