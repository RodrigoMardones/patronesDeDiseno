import { Monster } from './monster';
export default class MidMonster implements Monster {
    lifepoints: number;
    attack: number;
    defense: number;
    waterResistance: number;
    fireResistance: number;
    airResistance: number;
    rockResistance: number;
    constructor(aquabonus: number, fireBonus: number, airBonus: number, rockBonus: number) {
        this.lifepoints = 200
        this.attack = 10
        this.defense = 10
        this.waterResistance = 10 * aquabonus;
        this.fireResistance = 10 * fireBonus;
        this.airResistance = 10 * airBonus;
        this.rockResistance = 10 * rockBonus;
    }


}