import { LightningElement ,track,wire} from 'lwc';
import { registerListener,unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';
export default class Subscribercomponent extends LightningElement {
    @track color;
    @wire(CurrentPageReference) pageRef;
connectedCallback()
{
    registerListener("changedColor", this.handleChangedColor, this);
}
disconnectedCallback()
{
    unregisterAllListeners(this);
}
handleChangedColor(colorCode) {
    /*eslint-disable-next-line*/
    console.log("color--->" + colorCode);
    this.color = colorCode;
  }
    get colorStyle() {
        return `background-color: ${this.color}`;
      }
}