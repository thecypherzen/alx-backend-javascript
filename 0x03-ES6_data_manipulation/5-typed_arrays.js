/**
 * Creates an Int8 Typed Array and insersts a value at a
 * specific position
 * @param { Number } length - the length of the typed array
 * @param { Number } position - index to insert the value
 * @param { Number } value - the value to insert
 * @throws Error if it's impossible to add value at position
 * @returns { ArrayBuffer }  - the created array buffer
 */
export default function createInt8TypedArray(length, position, value) {
  if (position > length - 1) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const bufferView = new Int8Array(buffer);

  bufferView[position] = value;
  return new DataView(buffer);
}
