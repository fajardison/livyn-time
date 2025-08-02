/**
 * Validates the provided format string.
 * 
 * Ensures the format is a non-empty string. Throws an error if validation fails.
 * 
 * @param {string} format - The format string to validate.
 * @throws {TypeError} If the format is not a string or is an empty string after trimming.
 */
export default function validateFormat(format) {
  if (typeof format !== 'string' || format.trim() === '') {
    throw new TypeError('Format must be a non-empty string');
  }
}
