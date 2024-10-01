export default function appendToEachArrayValue(array, appendString) {
  const arrCopy = [];
  for (const item of array) {
    arrCopy.push(appendString + item);
  }
  return arrCopy;
}
