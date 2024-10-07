/**
 * Representation of an Airport
 *
 * @param {name} - the name of the airport
 * @param {code} - the short code for the airport
 */
export default class Airport {
  constructor(name, code) {
    /* eslint no-underscore-dangle: ["error", {"allow": ["_name", "_code"]}] */
    this._name = name;
    this._code = code;
  }
  /* one method of customizing the tag of out class
  [Symbol.for('nodejs.util.inspect.custom')]() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
  */

  /* the second way of doing so */
  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
