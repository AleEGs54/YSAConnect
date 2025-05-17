/**
 * Returns a new string with the first character of the given string capitalized.
 *
 * @param {string} str - The string to capitalize.
 * @returns {string} The capitalized string.
 */
export function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }