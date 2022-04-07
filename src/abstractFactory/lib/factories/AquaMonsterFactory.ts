import { BasicMonster, MidMonster } from "../monster";
import MonsterFactory from "./MonsterFactory";
import SuperMonster from '../monster/superMonster';


export default class AquaMonsterFactory implements MonsterFactory {
    public aquaBonus: number = 1.25;
    public fireBonus: number = -1.25;
    public airBonus: number = 1;
    public rockBonus: number = 1;
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