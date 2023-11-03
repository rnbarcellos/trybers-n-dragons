import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _type: EnergyType;
  private static _instances = 0;

  constructor(name: string) {
    super(name);
    this._type = 'stamina';
    Ranger._instances += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances(): number {
    return Ranger._instances;
  }
}

export default Ranger;
