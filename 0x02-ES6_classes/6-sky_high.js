import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    /* eslint no-underscore-dangle: ["error", {"allow":["_floors"]}] */
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
