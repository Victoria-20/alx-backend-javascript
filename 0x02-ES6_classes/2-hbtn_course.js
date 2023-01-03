export default class ClassRoom {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get nam() {
    return this._name;
  }

  set nam(value) {
    if (typeof value !== 'string') {
      throw TypeError('Name must be a string');
    } else {
      this._name = value;
    }
  }

  get len() {
    return this._length;
  }

  set len(value) {
    if (typeof value !== 'number') {
      throw TypeError('Length must be a number');
    } else {
      this._length = value;
    }
  }

  get stud() {
    return this._students;
  }

  set stud(value) {
    if (typeof value !== 'object') {
      throw TypeError('Students must be an array of strings');
    } else {
      this._students = value;
    }
  }
}
