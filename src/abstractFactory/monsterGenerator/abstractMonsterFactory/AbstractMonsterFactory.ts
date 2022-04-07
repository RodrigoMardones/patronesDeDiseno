import { MonsterFactory } from "../factories";
import { Monster } from "../monster";

export default class AbstractMonsterFactory {
   constructor( private monsterFactory: MonsterFactory) {}
   setFactory( newMonsterFactory : MonsterFactory): AbstractMonsterFactory {
       this.monsterFactory = newMonsterFactory;
       return this;
   }
   createBasicMonster () : Monster {
       return this.monsterFactory.createBasicMonster();
   }
   createMidMonster() : Monster {
       return this.monsterFactory.createMidMonster();
   }
   createSuperMonster(): Monster {
       return this.monsterFactory.createSuperMonster();
   }
}