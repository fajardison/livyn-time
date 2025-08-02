import dayNames from '../constants/dayNames.js';
import monthNames from '../constants/monthNames.js';

/**
 * Validates and resolves the provided locale for day and month names.
 * 
 * If the given locale is not supported or invalid, it defaults to 'en'.
 * 
 * @param {string} locale - The locale string to validate (e.g., 'en', 'id').
 * @returns {{
 *   dayNames: string[],
 *   dayNamesShort: string[],
 *   monthNames: string[],
 *   monthNamesShort: string[],
 *   locale: string
 * }} An object containing full and short names of days and months based on the resolved locale.
 * 
 * @throws {TypeError} If the locale provided is not a string.
 */
export default function validateLocale(locale) {
  if (typeof locale !== 'string') {
    throw new TypeError('Locale must be a string.');
  }

  const resolved = dayNames[locale] && monthNames[locale] ? locale : 'en';

  return {
    dayNames: dayNames[resolved].full,
    dayNamesShort: dayNames[resolved].short,
    monthNames: monthNames[resolved].full,
    monthNamesShort: monthNames[resolved].short,
    locale: resolved,
  };
}
