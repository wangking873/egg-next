'use strict';
const next = require('next');
const NEXT = Symbol('Application#next');

module.exports = {
  get next() {
    if (!this[NEXT]) {
      this[NEXT] = new next(this.config.next);
    }
    return this[NEXT];
  },
};
