import timestamp from './timestamp.js';
import timezoneMap from '../constants/timezoneMap.js';

/**
 * Retrieves detailed time zone information including offset, abbreviation, DST status, and localized time.
 *
 * @param {Object} [options={}] - Configuration object for the time zone information.
 * @param {string} [options.locale='en'] - Locale identifier (e.g., 'en', 'id').
 * @param {boolean} [options.short=false] - Whether to return a minimal object with only timeZone and offset.
 * @param {string} [options.format='dddd, D MMMM YYYY HH:mm:ss A'] - Custom format string for localized time output.
 * @param {string} [options.timeZone=Intl.DateTimeFormat().resolvedOptions().timeZone] - IANA time zone (e.g., 'Asia/Jakarta').
 * @returns {Object} An object containing time zone data, optionally abbreviated if `short` is `true`.
 */
export default function timezone({
  locale = 'en',
  short = false,
  format = 'dddd, D MMMM YYYY HH:mm:ss A',
  timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
} = {}) {
  
  const localeTime = timestamp(format, locale, timeZone);

  const formatter = new Intl.DateTimeFormat(locale, {
    timeZone,
    timeZoneName: 'longOffset',
    hour: '2-digit',
    minute: '2-digit',
  });

  const parts = formatter.formatToParts(Date.now());
  const rawOffset = parts.find(p => p.type === 'timeZoneName')?.value || '';
  const offset = rawOffset.replace(/[^+\-0-9:]/g, '');

  const { abbr = '', country = '' } = timezoneMap[timeZone] || {};

  const isDST = (() => {
    const getShortOffset = (timestampTarget) =>
      new Intl.DateTimeFormat('en-US', {
        timeZone,
        timeZoneName: 'short',
      })
        .formatToParts(timestampTarget)
        .find(p => p.type === 'timeZoneName')?.value;

    const now = Date.now();
    const jan = new Date(new Date(now).getFullYear(), 0, 1).getTime();
    const jul = new Date(new Date(now).getFullYear(), 6, 1).getTime();

    return (
      getShortOffset(jan) !== getShortOffset(now) ||
      getShortOffset(jul) !== getShortOffset(now)
    );
  })();

  if (short) {
    return {
      timeZone,
      offset: offset.replace(':', ''),
    };
  }

  return {
    timeZone,
    offset: offset.replace(':', ''),
    abbreviation: abbr,
    country,
    dst: isDST,
    localeTime,
  };
    }
