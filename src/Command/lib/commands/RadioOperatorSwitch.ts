import { Command } from ".";
import RadioOperator from "./RadioOperator";

export default class RadioOperatorSwitch implements Command {
  constructor(
    private radioOperator: RadioOperator
  ) {}
  execute(): void {
    this.radioOperator.turnOn();
  }
  undo(): void {
    this.radioOperator.turnOff();
  }
}