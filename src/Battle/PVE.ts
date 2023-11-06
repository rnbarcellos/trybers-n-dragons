import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  private _enemies: SimpleFighter[];

  constructor(player: Fighter, enemies: SimpleFighter[]) {
    super(player);
    this._enemies = enemies;
  }

  fight(): number {
    const { player } = this;
    const enemies = this._enemies;

    while (player.lifePoints > 0 && enemies.some((e) => e.lifePoints > 0)) {
      const enemy = enemies.find((e) => e.lifePoints > 0) as SimpleFighter;
      player.attack(enemy);
      if (enemy.lifePoints > 0) enemy.attack(player);
    }

    return player.lifePoints > 0 ? 1 : -1;
  }
}

export default PVE;
