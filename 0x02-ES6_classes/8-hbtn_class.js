/**
 * Represents a Holberton Class
 * @param {number} size - number of students in class
 * @param {string} location - class location
 */
export default class HolbertonClass {
  constructor(size, location) {
    /* eslint no-underscore-dangle: ["error", {"allow": ["_size", "_location"]}] */
    this._size = size;
    this._location = location;
  }

  /* can use these to override string/number coersion of class
  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
  */

  /* using symbols to achieve the same thing */
  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return this._location;
    }
    if (hint === "number") {
      return this._size;
    }
    return this.toString();
  }
}
