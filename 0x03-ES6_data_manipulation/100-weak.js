export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const bool = weakMap.has(endpoint);
  if (bool === false) {
    weakMap.set(endpoint, 1);
  } else {
    const times = weakMap.get(endpoint);
    weakMap.set(endpoint, times + 1);
    if (times + 1 >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
