/**
 * Creates a string from strings in a set that start with
 * the passed startString
 * @param { Object() } set  - the set
 * @param { String } startString - the string prefix
 * @returns { String } - a string of all post-fixes of the matched
 * words, separated with a `-` if found else an empty string.
 */
export default function cleanSet(set, startString) {
  const matched = [];
  set.forEach((element) => {
    if (startString.length && element.startsWith(startString)) {
      matched.push(element.slice(startString.length));
    }
  });
  return matched.join('-');
}
