import { Control, RadioOperator, RadioOperatorSwitch, RadioOperatorVolume } from './lib/commands';

export default function main() {
  const radioReproducer = new RadioOperator();
  const control = new Control(
    new RadioOperatorSwitch(radioReproducer),
    new RadioOperatorVolume(radioReproducer)
  )
  control.powerUp();
  control.volumeUp();
  control.volumeUp();
  control.volumeUp();
  control.volumeUp();
  control.volumeUp();
  control.volumeUp();
  control.volumeDown();
  control.powerDown();
}