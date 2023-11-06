import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy: Energy;
  private _dexterity: number;

  constructor(
    name: string,
    race: Race = new Elf(name, getRandomInt(1, 10)), 
    archetype: Archetype = new Mage(name),
    maxLifePoints: number = race.maxLifePoints / 2,
  ) {
    this._name = name;
    this._race = race;
    this._archetype = archetype;
    this._dexterity = race.dexterity;
    this._maxLifePoints = maxLifePoints;
    this._lifePoints = maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    const lifePointsLost = damage > 0 ? damage : 1;

    if (this._lifePoints - lifePointsLost <= 0) {
      this._lifePoints = -1;
      return this._lifePoints;
    }
    this._lifePoints -= lifePointsLost;

    return this._lifePoints;
  }

  levelUp(): void {
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    const validMaxLifePoints = this._maxLifePoints + getRandomInt(1, 10);
    this._maxLifePoints = validMaxLifePoints > this._race.maxLifePoints 
      ? this._race.maxLifePoints
      : validMaxLifePoints;
    this._lifePoints = this._maxLifePoints;
    this._energy.amount = 10;
  }

  get name(): string {
    return this._name;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }
}

export default Character;
