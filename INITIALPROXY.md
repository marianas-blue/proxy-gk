## Proxy initial benchmark metrics

### Test setup

```
Clients per second: 140
Duration: 1 min
Type: GET
URL: /api/products/%{*:0-10000000}
```

### Results

```
Average response: 1568 ms
Min/max: 34 / 2441 ms
err rate: 0.0%

Successful responses: 8379
Timeout: 0
4xx: 0
5xx: 0
Network: 0

Data sent by Loader: 1.41 MB
Received by clients: 35.51 MB

Valid redirects: 0
Invalid redirects: 0
```

### Proxy

```js
require('newrelic');
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const PORT = 8080;

const app = express();

const proxy = require('http-proxy-middleware');
app.use(
  '/api/products/',
  proxy({
    target: 'http://ec2-18-221-230-247.us-east-2.compute.amazonaws.com',
    changeOrigin: true
  })
);

app.use(cors());
app.use(compression());

app.use(express.static(__dirname + '/public'));

app.use('/:id', express.static(__dirname + '/public'));

app.listen(PORT, () => console.log(`listening at port ${PORT}`));
```
