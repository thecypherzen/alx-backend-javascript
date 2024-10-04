export default class Currency {
  constructor(code, name) {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_name", "_code"] }] */
    this._name = name;
    this._code = code;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(code) {
    this._code = code;
  }

  set name(name) {
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
