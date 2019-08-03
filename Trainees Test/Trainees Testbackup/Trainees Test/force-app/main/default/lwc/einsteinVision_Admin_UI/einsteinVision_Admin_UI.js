import { LightningElement ,api,track } from'lwc';
    //import { getRecord } from'lightning/uiRecordApi';
    import createDatasetFromUrl from'@salesforce/apex/EinsteinVision_Admin.createDatasetFromUrl';
    import getDatasets from'@salesforce/apex/EinsteinVision_Admin.getDatasets';
    import getModels from'@salesforce/apex/EinsteinVision_Admin.getModels';
    import deleteDataset from'@salesforce/apex/EinsteinVision_Admin.deleteDataset';
    import trainDataset from'@salesforce/apex/EinsteinVision_Admin.trainDataset';
    import { ShowToastEvent } from 'lightning/platformShowToastEvent';

  export default class EinsteinVision_Admin_UI extends LightningElement{
     
     @api
    recordId;
     @track zipUrl;
     @track url;
     @track dataset=[];
     @track modal=[];
    handler(event)
     { 
    this.url=event.target.value;
    //console.log(this.url);
     }
    onCreateDataset()
     { 
        var self=this;
       // var self1=this;
    //alert(this.url);
    createDatasetFromUrl({zipUrl:this.url})
     .then(result=> {
    this.res=result;
    // alert(this.res);
     }) .catch(error=> {
     });
     self.onLoadDatasets();
    //self1.onModelStatus();
    const evt = new ShowToastEvent({
      title: 'Record Update',
      message: 'Application is loaded ',
      variant: 'success',
      mode: 'dismissable'
  });
  this.dispatchEvent(evt);


}


    onLoadDatasets()
     { 
    getDatasets()
     .then(result=> {
    this.dataset=result;
    console.log(result);
     }) .catch(error=> {
     });

    }
    onModelStatus(){
        
    getModels({datasetId : dataset[0].id})
     .then(result=> {
    this.modal=result;
    // alert(this.res);
     }) .catch(error=> {
     });

    }
    onTrainDataset(event){
        alert(event.target.value.id);
        trainDataset({datasetId: event.target.value.id})
        .then(result=> {
            this.train=result;
             }) .catch(error=> {
             });
    }
    onDeleteDataset(event){
        var self = this;
        alert(event.target.value.id);
        deleteDataset({datasetId: event.target.value.id})
        .then(result=> {
            this.del=result;
             }) .catch(error=> {
             });
          self.onLoadDatasets();   
    }
}