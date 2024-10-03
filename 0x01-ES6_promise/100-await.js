import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photoRes = await uploadPhoto();
  const userRes = await createUser();
  if (!photoRes || !userRes) {
    return ({ photo: null, user: null });
  }
  return ({ photo: photoRes, user: userRes });
}
