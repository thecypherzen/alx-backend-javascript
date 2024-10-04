import { uploadPhoto, createUser } from './utils';

/**
 * Handles two promises gracefully
 *
 * @returns{object} - an object of promises' data on success of all
 *                  - an object of null values on failure of any
 */
export default async function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((res) => ({ photo: res[0], user: res[1] }))
    .catch(() => ({ photo: null, user: null }));
}
