import { BasicMonster, MidMonster, Monster, SuperMonster } from '../monster';
import MonsterFactory from './MonsterFactory';
export default class SandMonsterFactory implements MonsterFactory{
    airBonus: number = -1;
    aquaBonus: number = 1;
    fireBonus: number = 1;
    rockBonus: number = 1.5;

    createBasicMonster(): Monster {
        return new BasicMonster(this.aquaBonus, this.fireBonus, this.airBonus, this.rockBonus);
    }
    createMidMonster(): Monster {
        return new MidMonster(this.aquaBonus, this.fireBonus, this.airBonus, this.rockBonus);

    }
    createSuperMonster(): Monster {
        return new SuperMonster(this.aquaBonus, this.fireBonus, this.airBonus, this.rockBonus);
    }

}