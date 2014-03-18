tl
==

JS transport layer

## Usage

### interface.js

```javascript
var tl = require('tl');

var interface = module.exports = new tl.Interface();

interface.add('users');

```

### server.js

```javascript
var tl = require('tl');
var express = require('express');
var interface = require('./interface');
var app = express();

var server = module.exports = new tl.Server(interface, app);

server.users.wildcard();

app.listen(8888);

```

## client.js

```javascript
var tl = require('tl');
var interface = require('./Interface');

var client = module.exports = new tl.Client(interface, 'localhost:8888');

```

