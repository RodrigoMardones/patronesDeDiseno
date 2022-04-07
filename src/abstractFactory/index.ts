import AbstractMonsterFactory from './lib/abstractMonsterFactory/AbstractMonsterFactory';
import { FireMonsterFactory, AquaMonsterFactory, SandMonsterFactory} from "./lib/factories";
import { Monster } from "./lib/monster";

export default function main() {
    const monsterPerScreen = 1;
    let listOfMonsters : Array<Monster> = [];
    let currentFactory = new AbstractMonsterFactory(new FireMonsterFactory());
    for(let i = 0; i < monsterPerScreen; i++) {
        listOfMonsters.push(currentFactory.createBasicMonster());
        listOfMonsters.push(currentFactory.createMidMonster());
        listOfMonsters.push(currentFactory.createSuperMonster());
    }
    console.log(listOfMonsters);
    listOfMonsters = [];
    currentFactory.setFactory(new AquaMonsterFactory());
    for(let i = 0; i < monsterPerScreen; i++) {
        listOfMonsters.push(currentFactory.createBasicMonster());
        listOfMonsters.push(currentFactory.createMidMonster());
        listOfMonsters.push(currentFactory.createSuperMonster());
    }
    console.log(listOfMonsters);
    listOfMonsters = [];
    currentFactory.setFactory(new SandMonsterFactory());
    for(let i = 0; i < monsterPerScreen; i++) {
        listOfMonsters.push(currentFactory.createBasicMonster());
        listOfMonsters.push(currentFactory.createMidMonster());
        listOfMonsters.push(currentFactory.createSuperMonster());
    }
    console.log(listOfMonsters);
}