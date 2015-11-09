/*jshint node:true, mocha:true */

'use strict';

require('should');

var adapter = require('floating-adapter');
var Decimal = require('core-arbitrary-precision')(adapter);
var unaryOpExtender = require('../src/');

describe('plus', function() {
  it('should give the square root', function() {
    Decimal = unaryOpExtender(Decimal, 'sqrt');
    Decimal = unaryOpExtender(Decimal, 'sqrt', '√');

    new Decimal('9').sqrt().toString().should.be.exactly('3');
    new Decimal('9')['√']().toString().should.be.exactly('3');
  });

  it('should throw when the given method does not exist', function() {
    (function() {
      unaryOpExtender(Decimal, 'nonExistentMethod');
    }).should.throw('Unsupported operation');
  });
});
