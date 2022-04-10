import Command from "./command";
import RadioOperator from "./RadioOperator";

export default class RadioOperatorVolume implements Command{
  constructor(public radioStation : RadioOperator) {}
  execute(): void {
    this.radioStation.volumeUp();
  }
  undo(): void {
    this.radioStation.volumeDown();
  }
}