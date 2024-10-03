import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * handleProfileSignup - resolves multiple promises regardless of status
 * @firstName{string} -  user first name
 * @lastName{string} - user last name
 * @fileName{string} - photo file name
 * @returns:{Promise<object>} - single promise with array as resolved data
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => results.map((res) => ({
      status: res.status,
      value: res.value
        ? res.value : res.reason,
    })));
}
