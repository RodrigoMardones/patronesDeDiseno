import { Command } from ".";
import RadioOperator from "./RadioOperator";

export default class RadioOperatorSwitch implements Command {
  constructor(public radioOperator: RadioOperator) {}
  execute(): void {
    this.radioOperator.turnOn();
  }
  undo(): void {
    this.radioOperator.turnOff();
  }
}