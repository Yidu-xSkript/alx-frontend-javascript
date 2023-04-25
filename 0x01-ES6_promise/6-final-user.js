import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) => {
    const _ = [];
    for (const value of values) {
      _.push({ status: value.status, value: value.value || value.reason });
    }
    return _;
  });
}
