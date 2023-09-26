export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    var ke = array.findIndex((k) => k == idx)
    array[ke] = appendString + idx;
  }

  return array;
}
