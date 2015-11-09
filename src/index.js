/*jshint node:true */

'use strict';

module.exports = function unaryOpExtender(Decimal, opName, protoName) {
  var adapter = Decimal.getAdapter();

  var implementation = function() {
    throw new Error('Unsupported operation');
  };

  if (adapter.hasOwnProperty(opName)) {
    implementation = function() {
      return new Decimal(adapter.toString(adapter[opName](this.val())));
    };
  }

  Decimal.prototype[protoName || opName] = implementation;

  return Decimal;
};
