/**
 * Updates quantities of all mapped items where quantity is 1 to 100
 * @param { Map<String, Number> } mapData - the data set
 * @throws { Error } if param is not a Map or if updating value is
 * impossible
 * @returns the updated map.
 */
export default function updateUniqueItems(mapData) {
  if (!(mapData instanceof Map) || !mapData.size) {
    throw Error('Cannot process');
  }
  mapData.forEach((value, key) => {
    if (value === 1) {
      mapData.set(key, 100);
    }
  });
  return mapData;
}
