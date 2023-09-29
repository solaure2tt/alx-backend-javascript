export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;   
    }

  get name() {
    return this._name;
  }

  get students() {
    return this._students;
  } 

  get length() {
    return this._length;
  }

  set name(name) {
    if (typeof name === "string")
      this._name = name;
    else
      throw TypeError('Name must be a string');
  }

  set length(length) {
    if (typeof length === "number")
      this._length = length;
    else
      throw TypeError('length must be a number');
  }

  set students(students) {
    if (Array.isArray(students)) {
      if (students.every((student) => typeof student === 'string'))
        this._students = students;
      else
        throw TypeError('Students must be an array of strings');
    }
    else
      throw TypeError('Students must be an array of strings');
  }
}
