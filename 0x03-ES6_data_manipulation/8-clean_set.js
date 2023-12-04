export default function cleanSet(set, startString) {
  if (startString === '') return '';
  const stringArray = [];
  const index = startString.length;

  for (const setString of set) {
    if (setString.startsWith(startString)) stringArray.push(setString.slice(index));
  }

  return stringArray.join('-');
}
