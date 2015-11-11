/*jshint node:true */

'use strict';

function unsupported() {
  throw new Error('Unsupported operation');
}

module.exports = function unaryOpExtender(Decimal, opName, protoName) {
  var adapter = Decimal.getAdapter();
  var implementation = unsupported;

  if (adapter.hasOwnProperty(opName)) {
    implementation = function() {
      return new Decimal(adapter.toString(adapter[opName](this.val())));
    };
  }

  Decimal.prototype[protoName || opName] = implementation;

  return Decimal;
};
