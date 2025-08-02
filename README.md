# @livyn/time

A lightweight utility to generate timestamps in various formats and languages (locales).

![npm version](https://img.shields.io/npm/v/@livyn/time)
[![Version](https://img.shields.io/badge/Version-v1.0.0-blue)](https://www.npmjs.com/package/@livyn/time?activeTab=versions)
[![License](https://img.shields.io/badge/License-MIT-green)](https://github.com/fajardison/livyn-time/blob/main/LICENSE)
[![ESM](https://img.shields.io/badge/javascript-ESM-orange)](https://nodejs.org/api/esm.html)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-blue)](https://nodejs.org/)
![Supported Locales](https://img.shields.io/badge/locales-20%2B-blue)

---

## ✨ Features

- Flexible time formatting (`YYYY-MM-DD`, `HH:mm:ss`, etc.)
- Supports over 20 languages and locales
- Full token support:
  - `dddd`, `ddd`, `dd`
  - `MMMM`, `MMM`, `MM`, `M`
  - `Do`, `D`, `DD`
  - `HH`, `hh`, `mm`, `ss`, `A`, `a`, etc.
- Predefined formats: `iso`, `iso-local`, or custom
- IANA timezone support

---

## 📦 Installation

```bash
npm install @livyn/time
```

---

## 🚀 Usage

### Default Import

```js
import time from '@livyn/time';

time.timestamp();
time.timezone();
```

### Named Import

```js
import { timestamp, timezone } from '@livyn/time';

timestamp('ms');        // UNIX timestamp in milliseconds
timezone();             // Timezone offset e.g., "+0700"
```

---

## ⏱️ timestamp(format?, locale?, timezone?)

Generate a timestamp string based on formatting, localization, and timezone.

### Example:

```js
import time from '@livyn/time';

time.timestamp();
time.timestamp('YYYY-MM-DD HH:mm:ss');
time.timestamp('dddd, D MMMM YYYY HH:mm:ss', 'id');
time.timestamp('ddd, Do MMMM YYYY hh:mm A Z', 'en');
time.timestamp('YYYY-MM-DD HH:mm:ss', 'id', 'Asia/Jakarta');
```

### Output Sample:

```
2025-08-03 01:10:26 AM
2025-08-03 01:10:26
Minggu, 3 Agustus 2025 01:10:26
Sun, 3rd August 2025 01:10 AM +07:00
```

---

## 📦 Predefined Formats

Use shorthand predefined formats for convenience:

| Format      | Output Example                        |
|-------------|----------------------------------------|
| `iso`       | `2025-07-30T16:00:00.000Z` (UTC ISO)  |
| `iso-local` | `2025-07-30 23:00:00` (local time)    |

---

## 🧩 Format Tokens

| Token  | Meaning                        | Example      |
|--------|--------------------------------|--------------|
| `YYYY` | Full year                      | 2025         |
| `MM`   | Month with leading zero        | 07           |
| `D`    | Day of the month               | 3            |
| `dddd` | Weekday name                   | Sunday       |
| `hh`   | Hour (12h format)              | 01           |
| `HH`   | Hour (24h format)              | 13           |
| `mm`   | Minutes                        | 45           |
| `ss`   | Seconds                        | 08           |
| `A/a`  | AM/PM                          | AM           |
| `Z`    | Timezone offset                | +07:00       |
| `X/x`  | Unix timestamp (s/ms)          | 1722355200   |

---

## 🌍 Supported Locales

- `en`, `id`, `fr`, `de`, `es`, `it`, `ja`, `zh`, `ru`, `pt`, `hi`, `ko`, `tr`, `nl`, `th`, `vi`, `pl`, `ar`, `el`, `sv`

---

## 🌐 timezone(options?)

Retrieve current timezone metadata and locale-aware time string.

### Example:

```js
import time from '@livyn/time';

time.timezone();
time.timezone({ locale: 'id', short: true });
time.timezone({ locale: 'id' });
time.timezone({ format: 'dddd, D MMMM YYYY HH:mm:ss' });
time.timezone({
  locale: 'id',
  format: 'dddd, D MMMM YYYY HH:mm:ss',
});
```

### Output:

```json
{
  "timeZone": "Asia/Jakarta",
  "offset": "+0700",
  "abbreviation": "WIB",
  "country": "Indonesia",
  "dst": false,
  "localeTime": "Minggu, 3 Agustus 2025 01:04:50"
}
```

---

### Timezone Options

| Option     | Type     | Default                         | Description                                  |
|------------|----------|----------------------------------|----------------------------------------------|
| `locale`   | string   | `'en'`                           | Language for `localeTime`                    |
| `short`    | boolean  | `false`                          | Return only `timeZone` and `offset`          |
| `format`   | string   | `'dddd, D MMMM YYYY HH:mm:ss A'`| Format string using `timestamp()` internally |
| `timeZone` | string   | Current system time zone         | IANA zone, e.g. `'Asia/Jakarta'`             |

---

## 📄 License

MIT © [Dimas Fajar](https://github.com/fajardison)
