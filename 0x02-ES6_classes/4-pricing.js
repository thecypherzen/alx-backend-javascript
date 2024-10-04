import Currency from './3-currency'; // eslint-disable-line no-unused-vars

/**
 * @param {Currency} currency  - the currency of price
 */
export default class Pricing {
  constructor(amount, currency) {
    /* eslint no-underscore-dangle: ["error", {"allow": ["_amount", "_currency"]}] */
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    this._amount = amount;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
