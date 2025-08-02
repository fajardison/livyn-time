import time from '@livyn/time'

console.log(time.timezone())
console.log('\n\n')
console.log(time.timezone({ locale: 'id', short: true }));
console.log('\n\n')
console.log(time.timezone({ locale: 'id' }));
console.log('\n\n')
console.log(time.timezone({ format: 'dddd, D MMMM YYYY HH:mm:ss', }));
console.log('\n\n')
console.log(time.timezone({
  locale: 'id',
  format: 'dddd, D MMMM YYYY HH:mm:ss',
}));
