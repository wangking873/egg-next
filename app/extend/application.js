'use strict';
const next = require('next');
const NEXT = Symbol('Application#next');
const dev = process.env.NODE_ENV === 'development';
console.log('dddddddddddddddddddddddddddddd');
console.log(process.env.NODE_ENV);
console.log(dev);
module.exports = {
  get next() {
    if (!this[NEXT]) {
      this[NEXT] = new next({ dev });
    }
    return this[NEXT];
  },
};
