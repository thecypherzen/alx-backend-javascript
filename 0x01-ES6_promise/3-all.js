import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((res) => {
      const output = { ...res[0], ...res[1] };
      console.log(`${output.body} ${output.firstName} ${output.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
