export default function iterateThroughObject(reportWithIterator) {
  const arr = [];
  let next = reportWithIterator.next();
  while (!next.done) {
    arr.push(next.value);
    next = reportWithIterator.next();
  }
  return `${arr.join(' | ')}`;
}
