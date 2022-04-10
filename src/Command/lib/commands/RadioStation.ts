export default class RadioOperator {
  radioState: boolean = false;
  radioStation: string = '';
  turnOn(): RadioOperator {
    this.radioState = true;
    return this;
  }
  turnOff(): RadioOperator {
    this.radioState = false;
    return this;
  }
  changeStation(radioStation: string): RadioOperator {
    this.radioStation = radioStation;
    return this;
  }
}