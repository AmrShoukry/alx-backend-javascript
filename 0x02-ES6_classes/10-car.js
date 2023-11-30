const newInstanceSymbol = Symbol('newInstance');

export default class Car {
  constructor(brand, motor, color) {
    // if (typeof brand !== 'string') throw new TypeError('Brand must be a string');
    // if (typeof motor !== 'string') throw new TypeError('Motor must be a string');
    // if (typeof color !== 'string') throw new TypeError('Color must be a string');

    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  set brand(value) {
    // if (typeof value !== 'string') throw new TypeError('Brand must be a string');

    this._brand = value;
  }

  set motor(value) {
    // if (typeof value !== 'string') throw new TypeError('Motor must be a string');

    this._motor = value;
  }

  set color(value) {
    // if (typeof value !== 'string') throw new TypeError('Color must be a string');

    this._color = value;
  }

  static [newInstanceSymbol](value) {
    return new this(value);
  }

  cloneCar() {
    return this.constructor[newInstanceSymbol](this.value);
  }
}
