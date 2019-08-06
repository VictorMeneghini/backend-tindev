const express = require('express');

const server = express();

server.get('/', (req, res) => {
  return res.send('hi');
});

server.listen(3333);