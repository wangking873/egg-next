'use strict';
const { parse } = require('url');

function* nextsender(options, app, ctx) {
  const path = ctx.path;
  const parsedUrl = parse(ctx.req.url, true);
  ctx.status = 200;
  if (/\.js$/.test(path)) {
    ctx.set('Content-Type', 'application/javascript');
  }
  if (/\.css$/.test(path)) {
    ctx.set('Content-Type', 'text/css');
  }
  const handle = app.next.getRequestHandler();
  yield handle(ctx.req, ctx.res, parsedUrl);
}

module.exports = (options, app) => {
  return function* (next) {
    const path = this.path;
    if (/\/_next\//.test(path)) {
      yield nextsender(options, app, this);
    } else {
      yield next;
      if (this.status !== 404 || this.method !== 'GET') {
        return;
      }
      yield nextsender(options, app, this);
    }
  };
};
