import { uploadPhoto, createUser } from './utils';

/**
 * handleProfileSignup - collectively resolves promises
 *   returned by two functions.
 *   => on resolution, logs response in format `body firstName lastName`
 *   => on error, logs a message
 * returns: void
 */
export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    .then((res) => {
      console.log(`${res[1].body} ${res[0].firstName} ${res[0].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
