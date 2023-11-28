import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  const promise0 = uploadPhoto();
  const promise1 = createUser();

  return Promise.all([promise0, promise1])
    .then((responses) => {
      console.log(
        `${responses[0].body} ${responses[1].firstName} ${responses[1].lastName}`
      );
    })
    .catch(() => {
      console.log("Signup system offline");
    });
}
