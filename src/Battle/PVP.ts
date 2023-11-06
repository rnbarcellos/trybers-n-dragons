import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player2 = player2;
  }

  fight(): number {
    const player1 = this.player;
    const player2 = this._player2;

    while (player1.lifePoints > 0 && player2.lifePoints > 0) {
      player1.attack(player2);
      if (player2.lifePoints > 0) player2.attack(player1);
    }

    return player1.lifePoints > 0 ? 1 : -1;
  }
}

export default PVP;