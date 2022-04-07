import { Monster } from '../monster/monster';

export default interface MonsterFactory {
    aquaBonus: number;
    fireBonus: number;
    rockBonus: number;
    airBonus: number;
    createBasicMonster(): Monster;
    createMidMonster(): Monster;
    createSuperMonster(): Monster;
}