export default function appendToEachArrayValue(array, appendString) {
  const arrCopy = array;
  for (const item of arrCopy) {
    arrCopy[arrCopy.indexOf(item)] = appendString + item;
  }
  return arrCopy;
}
