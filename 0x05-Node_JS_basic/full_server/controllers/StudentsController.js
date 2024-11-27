/**
 * Student controller class
 */
import readDatabase from '../utils';

class StudentsController {
  /**
   * Fetch all students from database
   * GET: /students
   * Returns an object of the form:
   * { field: [first names of students in field] }
   */
  static getAllStudents(request, response) {
    const { dbName } = request;

    // Read database content
    readDatabase(dbName)
      .then((fields) => {
        // Order keys in alphabetical order
        let body = 'This is the list of our students\n';
        const orderedKeys = Object
          .keys(fields)
          .sort((a, b) => a.toLowerCase()
            .localeCompare(b.toLowerCase()));
        // Complete response body
        for (const key of orderedKeys) {
          body += `Number of students in ${key}: `
            + `${fields[key].length}. `
            + `List: ${fields[key].join(', ')}\n`;
        }
        // Send response
        response.send(body);
      })
      .catch((err) => {
        response.status(500).send(err.message);
      });
  }

  /**
   * Get all students by major
   * GET: /students/:major
   * <major> can only be 'CS' or 'SWE'
   */
  static getAllStudentsByMajor(request, response) {
    // Verify major is valid
    const major = request.params.major || null;
    if (!major || (major !== 'CS' && major !== 'SWE')) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    // Get db path from request object and fetch fields
    const { dbName } = request;
    readDatabase(dbName)
      .then((fields) => response.send(`List: ${fields[major].join(', ')}`))
      .catch((err) => response.status(500).send(err.message));
    return null;
  }
}

export default StudentsController;
