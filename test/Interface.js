var Interface = require('../Interface');
var assert = require('chai');

describe("Interface", function() {
  it("should initialize", function() {
    var i = new Interface();
    assert(i);
  });
  it("should add something", function() {
    var i = new Interface();
    i.add('foo', 'asdf');
    assert(i.get('foo'));
  });
});