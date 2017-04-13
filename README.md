# egg-next

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-next.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-next
[travis-image]: https://img.shields.io/travis/eggjs/egg-next.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-next
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-next.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-next?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-next.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-next
[snyk-image]: https://snyk.io/test/npm/egg-next/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-next
[download-image]: https://img.shields.io/npm/dm/egg-next.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-next

<!--
Description here.
-->

## 依赖说明

### 依赖的 egg 版本

egg-next 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 开启插件

```js
// config/plugin.js
exports.next = {
  enable: true,
  package: 'egg-next',
};
```

## 使用场景

- 给egg增加next同构的能力，属于koa中间件最外层，/_next/前缀的请求通过next处理不在进入内层中间件，其他请求直接进入内层中间件处理（egg视图等），处理完后，如果返回404，再由next兜底。
demo 地址 https://github.com/wangking873/egg-next-demo


## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
