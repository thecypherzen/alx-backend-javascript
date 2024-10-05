/* This used to be in 9-hoisting, but was separated
 * for eslint compiance
 */

export default class HolbertonClass {
  constructor(year, location) {
    /* eslint no-underscore-dangle: [
     "error", {"allow": ["_year", "_location", "_firstName", "_lastName", "_holbertonClass"]}]
    */
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}
