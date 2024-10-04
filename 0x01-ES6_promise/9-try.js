/**
 * puts to use try..catch..finaly blocks
 * @func{function} - a callback
 * @returns{object<Array>} - the resulting array from our sequence
 */
export default function mathFunction(func) {
  const queue = [];
  try {
    const res = func();
    queue.push(res);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return (queue);
}
