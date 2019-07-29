/**
 * Check if an item is within an array OR if a string is part of a bigger string
 * @template T
 * @param {Array<T> | string} array
 * @param {T | string} item
 */
export function includes(array, item) {
  return (
    (Array.isArray(array) || typeof array === 'string') &&
    array.indexOf(item) > -1
  );
}
