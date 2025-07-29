# @livyn/time

[![npm version](https://img.shields.io/npm/v/@livyn/time)](https://www.npmjs.com/package/@livyn/time)
[![Version](https://img.shields.io/badge/Version-v1.0.0-blue)](https://www.npmjs.com/package/@livyn/time?activeTab=versions)
[![License](https://img.shields.io/badge/License-MIT-green)](https://github.com/fajardison/livyn-time/blob/main/LICENSE)
[![ESM](https://img.shields.io/badge/javascript-ESM-orange)](https://nodejs.org/api/esm.html)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-blue)](https://nodejs.org/)

> Lightweight and customizable time formatting utility with locale support for **JavaScript** projects.

---

## ✨ Features

- 🕒 Custom date-time formatting
- 🌐 Locale support (`en`, `id`, etc.)
- 🔁 Short and long format modes
- 🧩 Modular, zero dependencies
- ⏰ Auto timezone detection

---

## 📦 Installation

```bash
npm install @livyn/time
```

---

## 📂 Exports

```js
import time from '@livyn/time'
// atau per modul
import timestamp from '@livyn/time/times/timestamp'
import timezone from '@livyn/time/times/timezone'
```

---

## 🚀 Usage

```js
import time from '@livyn/time'

time.timestamp() // → 2025-07-23T08:45:12.345Z

time.timestamp('YYYY-MM-DD HH:mm:ss') 
// → 2025-07-23 15:45:12

time.timestamp('dddd, MMMM Do YYYY', 'id') 
// → Rabu, Juli 23 2025

time.timezone() 
// → Asia/Jakarta
```

---

## 🧠 Format Support

- `YYYY`, `MM`, `DD`, `HH`, `hh`, `mm`, `ss`
- `A/a`, `dddd`, `ddd`, `Do`, `MMMM`, `MMM`
- `Z`, `x`, `X`

---

## 🌍 Locale Support

- `en` (English)
- `id` (Bahasa Indonesia)
- `enShort`, `idShort` (Singkatan hari/bulan)

---

## 📘 API Reference

### `timestamp(format?: string, locale?: string): string`

Kembalikan waktu dalam format tertentu dan locale yang dipilih. Default format: `iso`, default locale: `en`.

### `timezone(): string`

Kembalikan zona waktu lokal, contoh: `Asia/Jakarta`.

---

## 👤 Author

**[Dimas Fajar](https://github.com/fajardison)**

---

## ⚖️ License

This project is licensed under the **MIT License** — see the [LICENSE](https://github.com/fajardison/livyn-time/blob/main/LICENSE) file for details.
