var Server = require('../Server');
var assert = require('chai').assert;

describe("Server", function() {

  it("should initialize", function() {
    var i = new Server();
    assert(!! i);
  });

});