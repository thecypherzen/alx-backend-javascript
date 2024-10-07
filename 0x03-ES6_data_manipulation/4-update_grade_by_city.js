/**
 *
 * @param { Object[] } students - a list of student objects
 * @param { String } city - student's location to filter by
 * @param { Object[] } newGrades - new grades to updat for students
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  // get students by location
  const cityStudents = students.filter((student) => student.location === city);
  // update accordingly
  return cityStudents.map((student) => {
    const currStudent = student;
    const studentToGrade = newGrades.find(
      (gradedStudent) => gradedStudent.studentId === student.id,
    );
    currStudent.grade = studentToGrade ? studentToGrade.grade : 'N/A';
    return student;
  });
}
