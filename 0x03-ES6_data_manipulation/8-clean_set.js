export default function cleanSet(set, startString) {
  if (
    startString === ''
    || !set
    || typeof startString !== 'string'
    || !(set instanceof Set)
  ) return '';
  const stringArray = [];
  const index = startString.length;

  for (const setString of set) {
    if (setString.startsWith(startString)) stringArray.push(setString.slice(index));
  }

  return stringArray.join('-');
}
