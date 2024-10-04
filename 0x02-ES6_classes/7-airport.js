/**
 *
 */
export default class Airport {
  constructor(name, code) {
    /* eslint no-underscore-dangle: ["error", {"allow": ["_name", "_code"]}] */
    this._name = name;
    this._code = code;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
