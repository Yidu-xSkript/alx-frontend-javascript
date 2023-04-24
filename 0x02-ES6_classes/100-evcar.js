/* eslint-disable no-underscore-dangle */
import Car from './10-car';

class EVCar extends Car {
  constructor(brand = '', motor = '', color = '', range = '') {
    super(brand, motor, color);
    this._range = range;
  }

  // for privacy reasons cloneCar is called on a EVCar object,
  // the object returned should be an instance of Car instead of EVCar.
  static get [Symbol.species]() {
    return Car;
  }
}

export default EVCar;
