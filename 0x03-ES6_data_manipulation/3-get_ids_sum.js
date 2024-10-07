/**
 * Sums up all students' ids using reduce array method
 * @param { Object[] } studentsList - list of student objects
 * @returns { Number } - the sum of all student ids
 */
export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((acc, studentObj) => acc + studentObj.id, 0);
}
