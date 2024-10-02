export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject('The fake API is not working currently'); // eslint-disable-line prefer-promise-reject-errors
    }
  });
}
