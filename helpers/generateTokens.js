/**
 * Generates a set of date and time tokens based on the provided Date instance.
 *
 * This utility returns formatted tokens such as day names, month names, padded values,
 * 12/24-hour time, timezone offset, Unix timestamps, and more.
 *
 * @param {Date} now - The Date object representing the current time.
 * @param {Object} localeData - An object containing locale-specific data.
 * @param {string[]} localeData.dayNames - Full names of weekdays (e.g., ['Sunday', ...]).
 * @param {string[]} localeData.dayNamesShort - Abbreviated names of weekdays (e.g., ['Sun', ...]).
 * @param {string[]} localeData.monthNames - Full names of months (e.g., ['January', ...]).
 * @param {string} localeData.locale - Locale identifier (e.g., 'en').
 *
 * @returns {Object} An object containing various time-related tokens.
 */
export default function generateTokens(now, { dayNames, dayNamesShort, monthNames, locale }) {
  const pad = (n, len = 2) => String(n).padStart(len, '0');
  const hour24 = now.getHours();
  const hour12 = hour24 % 12 || 12;
  const ampm = hour24 >= 12 ? 'PM' : 'AM';

  const ordinal = (n) => {
    if (locale !== 'en') return n;
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  const timezoneOffset = () => {
    const offset = -now.getTimezoneOffset();
    const sign = offset >= 0 ? '+' : '-';
    const hours = pad(Math.floor(Math.abs(offset) / 60));
    const minutes = pad(Math.abs(offset) % 60);
    return `${sign}${hours}:${minutes}`;
  };

  return {
    dddd: dayNames[now.getDay()],
    ddd: dayNamesShort[now.getDay()],
    dd: dayNamesShort[now.getDay()].slice(0, 2),
    MMMM: monthNames[now.getMonth()],
    MMM: monthNames[now.getMonth()].slice(0, 3),
    YYYY: now.getFullYear(),
    YY: String(now.getFullYear()).slice(-2),
    MM: pad(now.getMonth() + 1),
    M: now.getMonth() + 1,
    DD: pad(now.getDate()),
    D: now.getDate(),
    Do: ordinal(now.getDate()),
    HH: pad(hour24),
    H: hour24,
    hh: pad(hour12),
    h: hour12,
    mm: pad(now.getMinutes()),
    m: now.getMinutes(),
    ss: pad(now.getSeconds()),
    s: now.getSeconds(),
    mmm: pad(now.getMilliseconds(), 3),
    A: ampm,
    a: ampm.toLowerCase(),
    Q: Math.floor((now.getMonth() + 3) / 3),
    Z: timezoneOffset(),
    X: Math.floor(now.getTime() / 1000),
    x: now.getTime()
  };
      }
    
