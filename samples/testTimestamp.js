import time from '@livyn/time'


console.log(time.timestamp('YYYY-MM-DD hh:mm:ss A')) // → 2025-07-30 11:53:09 PM
console.log(time.timestamp('YYYY-MM-DD HH:mm:ss a')) // → 2025-07-30 23:53:09 pm

// Format 24 jam (default jika tidak ada A/a)
console.log(time.timestamp('YYYY-MM-DD HH:mm:ss'))   // → 2025-07-30 23:53:09

console.log(time.timestamp('dddd, YYYY-MM-DD HH:mm:ss'));
// Wednesday, 2025-07-30 23:53:09
console.log(time.timestamp('dddd, YYYY MMMM DD HH:mm:ss a', 'id'))
// Rabu, 2025 Juli 30 23:53:09 pm
console.log(time.timestamp('dddd, YYYY MMM DD HH:mm:ss a', 'zh'))
console.log(time.timestamp('dddd, YYYY MM DD HH:mm:ss a', 'en'))
// Wednesday, 2025 07 30 23:53:09 pm
console.log(time.timestamp())
// → 2025-07-30T16:53:09.983Z

console.log('\n\n')
console.log(time.timestamp('ddd, Do MMMM YYYY hh:mm A Z', 'en'));
// Thu, 31st July 2025 12:11 AM +07:00
console.log(time.timestamp('ddd, D/M/YY h:mm A x', 'id'))
// Kam, 31/7/25 12:11 AM 1753895498256
