/**
 * Handles a promise properly
 * @promise: a promise
 * return: promise with handlers.
 */
export default function handleResponseFromAPI(promise) {
  return (promise)
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
