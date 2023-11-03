import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _type: EnergyType;
  private static _instances = 0;

  constructor(name: string) {
    super(name);
    this._type = 'stamina';
    Warrior._instances += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instances;
  }
}

export default Warrior;
