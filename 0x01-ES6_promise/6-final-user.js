import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise0 = signUpUser(firstName, lastName);
  const promise1 = uploadPhoto(fileName);

  return Promise.allSettled([promise0, promise1])
    .then((responses) => {
      responses.map((response) => ({
        status: response.status,
        value:
          response.status === 'fulfilled' ? response.value : response.reason,
      }));
    })
    .catch();
}
