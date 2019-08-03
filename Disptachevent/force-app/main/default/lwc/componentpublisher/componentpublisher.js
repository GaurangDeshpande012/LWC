

import { LightningElement, track, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';
 
export default class PalletePublisher extends LightningElement {
    @track color;
 
  @wire(CurrentPageReference) pageRef;
 
  colorCodeOptions = [
    { label: "green", value: "green" },
    { label: "red", value: "red" },
    { label: "yellow", value: "yellow" },
    { label: "blue", value: "blue" }
  ];
 
  changeColor(event) {
    this.color = event.target.value;
  }
 
  handleSearchKeyChange(searchKey) {
    this.searchKey = searchKey;
  }
 
  handleChangeColor() {
    /*eslint-disable-next-line*/
    console.log("color srs-->" + this.color);
    fireEvent(this.pageRef, "changedColor", this.color);
  }
}