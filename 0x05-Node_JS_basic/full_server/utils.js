import fs from 'node:fs';

function readDatabase(dbPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const students = data
          .split('\n')
          .slice(1)
          .filter((line) => line);
        const infoByFields = {};
        students.forEach((student) => {
          const fields = student.split(',');
          if (Object.keys(infoByFields).includes(fields[3])) {
            infoByFields[fields[3]].push(fields[0]);
          } else {
            infoByFields[fields[3]] = [fields[0]];
          }
        });
        resolve(infoByFields);
      }
    });
  });
}

export default readDatabase;
