export default function hasValuesFromArray(set, array) {
  for (const arrayElement of array) {
    let found = false;
    for (const setElement of set) {
      if (setElement === arrayElement) found = true;
    }
    if (found === false) return false;
  }
  return true;
}
