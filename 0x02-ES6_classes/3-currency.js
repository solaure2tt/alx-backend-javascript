export default class Currency {
  constructor(code, name) {
    this.name = name;
    this.code = code;
    }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(name) {
    if (typeof name === "string")
      this._name = name;
    else
      throw TypeError('Name must be a string');
  }

  set code(code) {
    if (typeof code === "string")
      this._code = code;
    else
      throw TypeError('code must be a string');
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
