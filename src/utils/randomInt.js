/**
 * Util function for generating a random integer between 2 numbers
 *
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
export function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
