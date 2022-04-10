export default class RadioOperator {
  radioState: boolean = false;
  radioStation: string = '';
  volume: number = 0;
  maxVolume : number = 5;
  turnOn(): RadioOperator {
    this.radioState = true;
    console.log(`radio turned on`);
    return this;
  }
  turnOff(): RadioOperator {
    this.radioState = false;
    console.log(`radio turned off`);
    return this;
  }
  changeStation(radioStation: string): RadioOperator {
    this.radioStation = radioStation;
    return this;
  }
  volumeUp(): RadioOperator {
    if(this.volume === this.maxVolume){
      console.log("max volume setted");
      return this;
    }
    this.volume = this.volume + 1;
    console.log(`volume to ${this.volume}`);
    return this;
  }
  volumeDown(): RadioOperator {
    if(this.volume - 1 > 0){
      this.volume = this.volume - 1;
      console.log(`volume to ${this.volume}`);
    }else {
      this.volume = 0;
      console.log(`volume to ${this.volume}`);
    }
    return this;
  }
}