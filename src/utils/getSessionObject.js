/**
 * Retrieves an object from session storage.
 * If the item does not exist in session storage, or if there is a parsing error,
 * the default value is returned.
 * @param {string} key - The key of the item to retrieve from session storage.
 * @param {*} defaultValue - The value to return if the item does not exist in session storage.
 * @returns {*} The retrieved object or the default value.
 */
export default function getSessionObject(key, defaultValue) {
    try {
        const item = sessionStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch {
        return defaultValue;
    }
}