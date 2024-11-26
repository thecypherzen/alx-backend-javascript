/**
 * Reads a database synchronously from a provided path
 * - If database is not available, it throws an error with
 *   message: 'Cannot load the database'.
 * - If database is available, it prints to console:
 *   'Number of students: NUMBER_OF_STUDENTS' then
 * - for every field, it prints:
 *   'Number of students in FIELD: COUNT. List: LIST_OF_FIRSTNAMES'
 * - empty lines are not valid students
 */
function countStudents(dbPath) {
  const fs = 'node:fs';
  const details = {};

  try {
    const data = fs.readFileSync(dbPath, 'utf-8');

    // Extract and organize data
    const students = data
      .split('\n')
      .filter((line) => line)
      .slice(1);
    const total = students.length;
    students.forEach((student) => {
      const info = student.split(',');
      if (Object.keys(details).includes(info[3])) {
        details[info[3]].count += 1;
        details[info[3]].names.push(info[0]);
      } else {
        details[info[3]] = { count: 1, names: [info[0]] };
      }
    });

    // Log out details
    console.log(`Number of students: ${total}`);
    for (const [key, value] of Object.entries(details)) {
      console.log(
        `Number of students in ${key}: `
          + `${value.count}. `
          + `List: ${value.names.join(', ')}`,
      );
    }
  } catch (err) {
    // Handle error
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
