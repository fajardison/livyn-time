# @livyn/time

[![npm version](https://img.shields.io/npm/v/@livyn/time)](https://www.npmjs.com/package/@livyn/time)
[![Version](https://img.shields.io/badge/Version-v1.0.0-blue)](https://www.npmjs.com/package/@livyn/time?activeTab=versions)
[![License](https://img.shields.io/badge/License-MIT-green)](https://github.com/fajardison/livyn-time/blob/main/LICENSE)
[![ESM](https://img.shields.io/badge/javascript-ESM-orange)](https://nodejs.org/api/esm.html)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-blue)](https://nodejs.org/)

> Lightweight, zero-dependency time utility with customizable formatting and locale support for JavaScript.

---

## ✨ Features

- 🕒 Custom date-time formatting
- 🌐 Built-in locale support (`en`, `id`, etc.)
- 🔁 Long/short format options
- 🧩 Pure ESM module, no dependencies
- ⏰ Detects system timezone automatically

---

## 📦 Installation

```bash
npm install @livyn/time
```

---

## 📂 Exports

```js
import time from '@livyn/time'
```

---

## 🚀 Usage

```js
import time from '@livyn/time'

console.log(time.timestamp()) 
// → 2025-07-23T08:45:12.345Z

console.log(time.timestamp('YYYY-MM-DD hh:mm:ss A')) 
// → 2025-07-23 03:45:12 PM

console.log(time.timestamp('YYYY-MM-DD HH:mm:ss a')) 
// → 2025-07-23 15:45:12 pm

console.log(time.timestamp('dddd, YYYY-MM-DD HH:mm:ss')) 
// → Thursday, 2025-07-24 00:11:53

console.log(time.timestamp('dddd, YYYY MMMM DD HH:mm:ss a', 'id')) 
// → Kamis, 2025 Juli 24 12:11:53 am

console.log(time.timestamp('dddd, YYYY MM DD HH:mm:ss a', 'en')) 
// → Thursday, 2025 07 24 12:11:53 am

console.log(time.timestamp('dddd, Do MMMM YYYY HH:mm:ss Z', 'enShort')) 
// → Thu, 24th Jul 2025 00:11:53 +07:00

console.log(time.timestamp('ddd, D/M/YY h:mm A x', 'idShort')) 
// → Kam, 24/7/25 12:11 AM 1721764313456

console.log(time.timezone()) 
// → Asia/Jakarta
```

---

## 🧠 Format Tokens

- `YYYY`, `MM`, `DD`, `HH`, `hh`, `mm`, `ss`
- `A`, `a` — AM/PM
- `dddd`, `ddd` — full/short day
- `Do` — ordinal day
- `MMMM`, `MMM` — full/short month
- `Z` — timezone offset
- `x`, `X` — timestamp ms/sec

---

## 🌍 Locale Support

- `en` – English
- `id` – Indonesian
- `enShort`, `idShort` – Abbreviated day/month

---

## 📘 API

### `timestamp(format?: string, locale?: string): string`

Returns a formatted date-time string.  
Defaults: `format = "iso"`, `locale = "en"`.

### `timezone(): string`

Returns the current system timezone, e.g. `"Asia/Jakarta"`.

---

## 👤 Author

**[Dimas Fajar](https://github.com/fajardison)**

---

## ⚖️ License

Licensed under the [MIT License](https://github.com/fajardison/livyn-time/blob/main/LICENSE).
