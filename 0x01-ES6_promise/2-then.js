export default function handleResponseFromAPI(promise) {
  const succ = { status: 200, body: 'success' };

  return promise
    .then(() => succ)
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
