import { Monster } from './monster';
export default class BasicMonster implements Monster {
    lifepoints: number;
    attack: number;
    defense: number;
    waterResistance: number;
    fireResistance: number;
    airResistance: number;
    rockResistance: number;
    constructor(waterBonus: number, fireBonus: number, airBonus: number, rockBonus: number){
        this.lifepoints = 100;
        this.attack = 1;
        this.defense = 1;
        this.waterResistance = 1 * waterBonus;
        this.fireResistance = 1 * fireBonus;
        this.rockResistance = 1 * rockBonus;
        this.airResistance = 1 * airBonus;
    }

}