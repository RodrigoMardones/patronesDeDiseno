import { BasicMonster, MidMonster, SuperMonster } from '../monster';
import MonsterFactory from './MonsterFactory';

export default class FireMonsterFactory implements MonsterFactory {
    rockBonus: number = 1;
    airBonus: number = 1.5;
    aquaBonus: number = -1.5;
    fireBonus: number = 1.5;
    
    createBasicMonster(): BasicMonster {
        return new BasicMonster(this.aquaBonus, this.fireBonus, this.airBonus, this.rockBonus);
    }
    createMidMonster(): MidMonster {
        return new MidMonster(this.aquaBonus, this.fireBonus, this.airBonus, this.rockBonus);
    }
    createSuperMonster(): SuperMonster {
        return new SuperMonster(this.aquaBonus, this.fireBonus, this.airBonus, this.rockBonus);
    }
    
}