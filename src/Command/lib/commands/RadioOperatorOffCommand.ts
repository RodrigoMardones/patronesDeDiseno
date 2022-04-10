import { Command } from ".";
import RadioOperator from "./RadioStation";

export default class RadioOperatorSwitchCommand implements Command{
  constructor(public radioOperator: RadioOperator) {}
  execute(): void {
    this.radioOperator.turnOn();
  }
  undo(): void {
    this.radioOperator.turnOn();
  }
}