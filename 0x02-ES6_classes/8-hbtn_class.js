export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [this.toPrimitive](hint) {
    if (hint === 'string') {
      return this._location;
    } if (hint === 'number') {
      return this._size;
    }
  }
}
