import Car from './10-car';

const newInstanceSymbol = Symbol('newInstance');

export default class EVCar {
  constructor(brand, motor, color, range) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  static [newInstanceSymbol](value) {
    return new Car(value);
  }

  cloneCar() {
    return this.constructor[newInstanceSymbol](this.value);
  }
}
