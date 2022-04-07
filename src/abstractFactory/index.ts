import AbstractMonsterFactory from './monsterGenerator/abstractMonsterFactory/AbstractMonsterFactory';
import { FireMonsterFactory, AquaMonsterFactory, SandMonsterFactory} from "./monsterGenerator/factories";
import { Monster } from "./monsterGenerator/monster";

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