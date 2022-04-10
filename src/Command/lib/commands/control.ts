import Command  from "./command";

export default class Control {
  constructor(
    private switchPower: Command, 
    private volume: Command
  ) {}
  setCommands(switchCommand: Command, volume: Command): void {
    this.switchPower = switchCommand;
    this.volume = volume;
  }
  powerUp(): void{
    this.switchPower.execute();
  }
  powerDown(): void {
    this.switchPower.undo();
  }
  volumeUp(): void {
    this.volume.execute();
  }
  volumeDown(): void {
    this.volume.undo();
  }
}