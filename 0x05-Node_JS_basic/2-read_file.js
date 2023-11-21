const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  let length = 0;
  const fields = {};
  try {
    const Contents = fs.readFileSync(fileName, 'utf-8');
    const lines = Contents.toString().split('\n');
    for (let nl = 0; nl < lines.length; nl += 1) {
      if (lines[nl]) {
        length += 1;
        const field = lines[nl].toString().split(',');
        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      }
    }
    const n = length - 1;
    console.log(`Number of students: ${n}`);
    for (const [k, v] of Object.entries(fields)) {
      if (k !== 'field') {
        console.log(`Number of students in ${k}: ${v}. List: ${students[k].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
