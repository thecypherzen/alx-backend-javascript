import Car from './10-car';

/**
 * inherits from Car
 * @param {string} range - the range of car
 */
export default class EVCar extends Car {
  /* eslint no-underscore-dangle: ["error", {
   "allow": ["_brand", "_motor","_color", "_range"]}] */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  /**
   * defines object's signature as Car masking `this`
   */
  static get [Symbol.species]() {
    return Car;
  }
}
