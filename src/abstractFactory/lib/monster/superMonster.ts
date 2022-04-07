import { Monster } from './monster';
export default class SuperMonster implements Monster {
    lifepoints: number;
    attack: number;
    defense: number;
    waterResistance: number;
    fireResistance: number;
    airResistance: number;
    rockResistance: number;
    constructor(aquaBonus: number, fireBonus: number, airBonus: number, rockBonus: number) {
        this.lifepoints = 400;
        this.attack = 20;
        this.defense = 20;
        this.waterResistance = 20 * aquaBonus;
        this.fireResistance = 20 * fireBonus;
        this.airResistance = 20 * airBonus;
        this.rockResistance = 20* rockBonus;
    }


}