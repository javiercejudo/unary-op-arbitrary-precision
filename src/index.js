/*jshint node:true */

'use strict';

var assert = require('assert-error');

module.exports = function unaryOpExtender(Decimal, opName, protoName) {
  var adapter = Decimal.getAdapter();

  assert(adapter.hasOwnProperty(opName), new Error('Unsupported operation'));

  Decimal.prototype[protoName || opName] = function() {
    return new Decimal(adapter.toString(adapter[opName](this.val())));
  };

  return Decimal;
};
