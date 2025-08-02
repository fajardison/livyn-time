import validateFormat from '../validators/validateFormat.js';
import validateLocale from '../validators/validateLocale.js';
import generateTokens from '../helpers/generateTokens.js';

/**
 * Generates a formatted timestamp string based on the given format, locale, and time zone.
 *
 * Supports ISO, ISO-local, or custom formatting using token placeholders.
 * For custom formats, tokens such as `YYYY`, `MM`, `DD`, `HH`, `mm`, `ss`, etc., are supported.
 *
 * @param {string} [format='iso'] - Format string ('iso', 'iso-local', or a custom pattern).
 * @param {string} [locale='en'] - Locale identifier (e.g., 'en', 'id').
 * @param {string|null} [timeZone=null] - Optional IANA time zone (e.g., 'Asia/Jakarta').
 * @returns {string} The formatted timestamp string, or an empty string on failure.
 */
export default function timestamp(format = 'iso', locale = 'en', timeZone = null) {
  try {
    validateFormat(format);
    const { locale: resolvedLocale, dayNames, dayNamesShort, monthNames } = validateLocale(locale);

    const now = timeZone
      ? new Date(new Date().toLocaleString('en-US', { timeZone }))
      : new Date();

    // Shortcut for ISO formats
    if (format === 'iso') return now.toISOString();
    if (format === 'iso-local') return now.toISOString().replace('T', ' ').split('.')[0];

    // Token replacement for custom format
    const tokens = generateTokens(now, {
      locale: resolvedLocale,
      dayNames,
      dayNamesShort,
      monthNames
    });

    const sortedTokens = Object.entries(tokens).sort((a, b) => b[0].length - a[0].length);

    let result = format;
    const placeholders = {};

    sortedTokens.forEach(([token, value], i) => {
      const placeholder = `__${i}__`;
      placeholders[placeholder] = value;
      result = result.replaceAll(token, placeholder);
    });

    for (const [placeholder, value] of Object.entries(placeholders)) {
      result = result.replaceAll(placeholder, value);
    }

    return result.trim();
  } catch (err) {
    console.error('timestamp() error:', err.message);
    return '';
  }
      }
