# unary-op-arbitrary-precision

[![Build Status](https://travis-ci.org/javiercejudo/unary-op-arbitrary-precision.svg)](https://travis-ci.org/javiercejudo/unary-op-arbitrary-precision)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/unary-op-arbitrary-precision/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/unary-op-arbitrary-precision?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/unary-op-arbitrary-precision/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/unary-op-arbitrary-precision)

unary operation abstraction for [core-arbitrary-precision](https://github.com/javiercejudo/core-arbitrary-precision/)

## Install

    npm i unary-op-arbitrary-precision

## Adapters

- See [adapters](https://www.npmjs.com/browse/keyword/core-arbitrary-precision-adapter)

## Usage

```js
var adapter = require('floating-adapter');
var Decimal = require('core-arbitrary-precision')(adapter);
var unaryOpFactory = require('unary-op-arbitrary-precision');

Decimal = unaryOpFactory(Decimal, 'sqrt');
Decimal = unaryOpFactory(Decimal, 'sqrt', '√');

new Decimal('9').sqrt().valueOf(); // => 3
new Decimal('9')['√']().valueOf(); // => 3
```

See [spec](test/spec.js).
