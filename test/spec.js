/*jshint node:true, mocha:true */

'use strict';

require('should');

var adapter = require('floating-adapter');
var Decimal = require('core-arbitrary-precision')(adapter);
var unaryOpExtender = require('../src/');

describe('unary operation', function() {
  it('should do something with one value', function() {
    unaryOpExtender(Decimal, 'sqrt');
    unaryOpExtender(Decimal, 'sqrt', '√');
    unaryOpExtender(Decimal, 'sqrt', 0);

    new Decimal('9').sqrt().toString().should.be.exactly('3');
    new Decimal('9')['√']().toString().should.be.exactly('3');

    // allow falsy protoName's
    new Decimal('9')[0]().toString().should.be.exactly('3');
  });

  it('should throw when the given method does not exist', function() {
    unaryOpExtender(Decimal, 'nonExistentMethod');

    (function() {
      new Decimal('2').nonExistentMethod();
    }).should.throw('Unsupported operation');
  });
});
