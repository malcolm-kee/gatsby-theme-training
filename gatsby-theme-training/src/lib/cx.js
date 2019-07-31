/**
 *
 * @param {string} className className that you want to check if exist
 * @param {[string]} maybeClassName the full className that you want to check if it includes className
 */
export const hasClass = (className, maybeClassName) =>
  maybeClassName &&
  typeof maybeClassName === 'string' &&
  maybeClassName.split(' ').indexOf(className) !== -1;
