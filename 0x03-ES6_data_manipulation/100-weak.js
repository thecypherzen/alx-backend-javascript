const weakMap = new WeakMap();

/**
 * Trasks number of calls to API from various endpoints
 * @param { Object } endpoint - an object representing an endpoint
 * @param { string } endpoint.protocol - the endpoint protocol
 * @param { string } endpoint.name - name of the endpoint
 * @throws { Error } if number of queries is >= 5 with a message
 */
function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    if (weakMap.get(endpoint) >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
  return weakMap.get(endpoint);
}

export { queryAPI, weakMap };
