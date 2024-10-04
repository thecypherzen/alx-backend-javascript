import ClassRoom from './0-classroom';

/**
 * Initializes 3 ClassRoom instances
 * @returns {array} - an array of the ClassRoom instances
 */
export default function initializeRooms() {
  return ([new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)]);
}
