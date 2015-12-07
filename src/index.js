/*jshint node:true */

'use strict';

var unsupported = require('unsupported')();
var isUndefined = require('lodash.isundefined');

module.exports = function unaryOpExtender(Decimal, opName, protoName) {
  var adapter = Decimal.getAdapter();
  var implementation = unsupported;
  var name = isUndefined(protoName) ? opName : protoName;

  if (adapter.hasOwnProperty(opName)) {
    implementation = function() {
      return new Decimal(adapter.toString(adapter[opName](this.val())));
    };
  }

  Decimal.prototype[name] = implementation;

  return Decimal;
};
