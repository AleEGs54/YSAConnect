/**
 * Removes all diacritical marks from a given string.
 * @param {string} str - The string to remove diacritical marks from
 * @returns {string} - The string without diacritical marks
 */
export default function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
