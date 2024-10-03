/**
 * Divides two numbers
 * @numerator{number} - the numerator
 * @numerator{number} - the denominator
 * returns - {float} on success {error<object>} on error
 */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return (numerator / denominator);
}
