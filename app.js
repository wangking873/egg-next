'use strict';

module.exports = app => {
  app.config.coreMiddleware.splice(0, 0, 'nextrender');
  app.next.prepare();
};