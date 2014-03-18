var Interface = function Interface() {

  var wildcard;
  var responses = {};

  this.add = function(name, response) {
    responses[name] = response;
  }

  this.get = function(name) {
    return responses[name];
  }

  return this;
}

module.exports = Interface;