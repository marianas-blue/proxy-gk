##Artillery GET Config:

```js
config:
  target: 'http://localhost:3007'
  phases:
    - duration: 180
      arrivalRate: 700
scenarios:
  - name: 'GET all recommended products'
    flow:
      - get:
          url: '/api/products/{{$randomNumber(1, 10000000)}}'

```

## GET Results

```sh
All virtual users finished
Summary report @ 14:38:48(-0800) 2019-03-09
  Scenarios launched:  126050
  Scenarios completed: 126050
  Requests completed:  126050
  RPS sent: 477.37
  Request latency:
    min: 7.4
    max: 1914.2
    median: 23.3
    p95: 339
    p99: 818.9
  Scenario counts:
    GET all recommended products: 126050 (100%)
  Codes:
    200: 126050

```

---

##Artillery POST Config:

```js
config:
  target: 'http://localhost:3007'
  phases:
    - duration: 180
      arrivalRate: 700
scenarios:
  - name: 'POST all recommended products'
    flow:
      - post:
          url: '/api/products/{{$randomNumber(1, 10000000)}}'
          json:
            name: 'Product + {{$randomNumber(1, 10000000)}}'
            oldId: '{{$randomNumber(1, 10000000)}}'
            oldName: 'Product {{$randomNumber(1, 10000000)}}'
            newId: '{{$randomNumber(1, 10000000)}}'
            newName: 'Product {{$randomNumber(1, 10000000)}}'
```

## POST Results

```sh
All virtual users finished
Summary report @ 14:49:05(-0800) 2019-03-09
  Scenarios launched:  126050
  Scenarios completed: 126050
  Requests completed:  126050
  RPS sent: 574.86
  Request latency:
    min: 4.2
    max: 1161.9
    median: 7.4
    p95: 31.6
    p99: 219.6
  Scenario counts:
    POST all recommended products: 126050 (100%)
  Codes:
    201: 126050
```
