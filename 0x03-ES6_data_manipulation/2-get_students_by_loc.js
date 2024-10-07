/**
 * Returns list of students by location
 *   Uses filter
 * @param { Object[] } studentsList - list of students objects
 * @param { String } city - location to filter by
 * @returns { Object[] } - list of matched students
 */
export default function getStudentsByLocation(studentsList, city) {
  return studentsList.filter((studentObj) => studentObj.location === city);
}
