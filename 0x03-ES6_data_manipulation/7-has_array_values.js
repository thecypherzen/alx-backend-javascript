/**
 * Checks if all array elements are in the set
 * @param { Object() } set - the set
 * @param { Object[] } array - the array
 * @returns { Bool } - true if all array elements are in set or false.
 * otherwise
 */
export default function hasValuesFromArray(set, array) {
  let result = true;
  for (const element of array) {
    if (!set.has(element)) {
      result = false;
      break;
    }
  }
  return result;
}
