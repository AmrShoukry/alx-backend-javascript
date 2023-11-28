import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const promise0 = uploadPhoto();
  const promise1 = createUser();

  return Promise.all([promise0, promise1])
    .then((responses) => ({
      photo: { status: responses[0].status, body: responses[0].body },
      user: {
        firstName: responses[1].firstName,
        lastName: responses[1].lastName,
      },
    }))
    .catch(() => ({
      photo: null,
      user: null,
    }));
}
