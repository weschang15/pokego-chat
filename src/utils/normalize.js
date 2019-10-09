/**
 * Util function for turning a string into something human readable
 *
 * @param {string} str string to normalize
 * @param {string} sep string to replace
 * @return {string} normalized string
 */
export function normalize(str, sep) {
  const parts = str.split(sep);
  return parts[0].charAt(0).toUpperCase() + parts.join(" ").slice(1);
}
