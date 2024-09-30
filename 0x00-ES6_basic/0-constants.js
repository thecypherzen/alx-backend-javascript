/**
 * A Test documentation
 */

// task first function
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}


// getlast function
export function getLast() {
  return ' is okay';
}

// taskNext function
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
