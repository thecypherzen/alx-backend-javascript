/**
 * Represents a car
 * @param {string} brand - the car brand
 * @param {string} motor - the car's make
 * @param {string} color - the car's colour
 */
export default class Car {
  constructor(brand, motor, color) {
    /* eslint no-underscore-dangle: ["error",
      {"allow": ["_brand", "_motor", "_color"]}
     ] */
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   * returns this object's signature
   */
  static get [Symbol.species]() {
    return this;
  }

  /**
   * copies this objects signature
   */
  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
