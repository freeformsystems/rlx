var expect = require('chai').expect;
var assert = {};

/**
 *  Assert on server meta data.
 */
assert.info = function(doc) {
  expect(doc).to.be.an('object');
  expect(doc.couchdb).to.be.a('string');
  expect(doc.uuid).to.be.a('string');
  expect(doc.version).to.be.a('string');
  expect(doc.vendor).to.be.an('object');
  expect(doc.vendor.version).to.be.a('string');
  expect(doc.vendor.name).to.be.a('string');
}

module.exports = assert;
