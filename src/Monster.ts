import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  _lifePoints: number;
  _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    if (this._lifePoints - attackPoints <= 0) {
      this._lifePoints = -1;
      return this._lifePoints;
    }
    this._lifePoints -= attackPoints;

    return this._lifePoints;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }
}

export default Monster;
