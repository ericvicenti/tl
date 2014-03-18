var Client = require('../Client');
var assert = require('chai').assert;

describe("Client", function() {

  it("should initialize", function() {
    var i = new Client();
    assert(!! i);
  });

});