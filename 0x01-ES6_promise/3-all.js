import { uploadPhoto, createUser } from './utils';

/**
 * handleProfileSignup - collectively resolves promises
 *   returned by two functions.
 *   => on resolution, logs response in format `body firstName lastName`
 *   => on error, logs a message
 * returns: void
 */
export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((res) => {
      console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
