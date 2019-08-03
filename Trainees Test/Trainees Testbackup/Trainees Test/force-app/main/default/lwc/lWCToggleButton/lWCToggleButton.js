import { LightningElement, track} from 'lwc';

export default class PcSelectButtonFramework extends LightningElement {
    buttonClicked; //defaulted to false

    @track cssClass = 'slds-button slds-button_neutral';
    @track iconName = '';

    // Handles click on the 'Show/hide content' button
    handleToggleClick() {
        this.buttonClicked = !this.buttonClicked; //set to true if false, false if true.
        this.cssClass = this.buttonClicked ? 'slds-button slds-button_outline-brand' : 'slds-button slds-button_neutral';
        this.iconName = this.buttonClicked ? 'utility:check' : '';
    }
}