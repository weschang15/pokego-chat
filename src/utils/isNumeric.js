/**
 * Util function to determine if it's numeric or contains letters
 *
 * @param {string} str string to check if it's numeric
 * @return {boolean}
 */
export function isNumeric(str) {
  const reg = /^\d+$/;
  return reg.test(str);
}
