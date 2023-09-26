import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const ans = [];
  try {
    const user = await signUpUser(firstName, lastName);
    ans.push({ status: 'fulfilled', value: user });
  }
  catch (err) {
    ans.push({
      status: 'rejected',
      value: err.toString(),
    });
  }

  try {
    const upload = await uploadPhoto(fileName);
    ans.push({ status: 'fulfilled', value: upload });
  }
  catch (err) {
    ans.push({
      status: 'rejected',
      value: err.toString(),
    });
  }

  return ans;
}
