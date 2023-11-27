export default function createIteratorObject(report) {
  const values = Object.values(report.allEmployees);
  const finalValues = [];

  for (const array of values) {
    for (const value of array) {
      finalValues.push(value);
    }
  }

  return finalValues;
}
