/**
 * Returns list of student ids
 * uses `map` to extract ids of students from a list of students objects
 * @param { Object[] } objectsList - list of student objects
 * @returns { Object[] }
 */
export default function getListStudentIds(objectsList) {
  if (!(objectsList instanceof Array)) {
    return [];
  }
  return objectsList.map((object) => object.id);
}
