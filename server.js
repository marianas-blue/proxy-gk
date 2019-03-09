const express = require('express');
const cors = require('cors');
const compression = require('compression');
const PORT = 8080;

const app = express();
app.use(cors());
app.use(compression());

app.use(express.static(__dirname + '/public'));

const proxy = require('http-proxy-middleware');
app.use(
  '/api/products/',
  proxy({
    target: 'http://localhost:3007',
    changeOrigin: true
  })
);

app.use('/:id', express.static(__dirname + '/public'));

app.listen(PORT, () => console.log(`listening at port ${PORT}`));
