const express = require('express');

const { readFile } = require('fs');

const app = express();
const port = 1245;

function countStudents(fileName) {
  const students = {};
  let length = 0;
  const fields = {};
  return new Promise((resolve, reject) => {
    readFile(fileName, (error, data) => {
      if (error) {
        reject(error);
      } else {
        let output = '';
        const lines = data.toString().split('\n');
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
        output += `Number of students: ${n}\n`;
        for (const [k, v] of Object.entries(fields)) {
          if (k !== 'field') {
            output += `Number of students in ${k}: ${v}. `;
            output += `List: ${students[k].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});
app.get('/students', (request, response) => {
  countStudents(process.argv[2].toString()).then((output) => {
    response.send(['This is the list of our students', output].join('\n'));
  }).catch(() => {
    response.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(port, () => {
});

module.exports = app;
