export default class Building {
  constructor(sqft) {
    /* eslint no-underscore-dangle: ["error", {"allow": ["_sqft"]}] */
    if (new.target !== Building
        && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
