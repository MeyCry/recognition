const express = require('express');
const path = require('path');
const port = 8080;
const app = require('./app');
const morgan = require('morgan');
const rfs = require('rotating-file-stream');

const accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  compress: true,
  path: path.join(__dirname, '..', 'assets/log'),
});
app.use(
  morgan('combined', {
    stream: accessLogStream,
    skip: req => {
      return req.url === '/favicon.ico';
    },
  }),
);

app.use(express.static(path.join(__dirname, '..', 'assets')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'pages'));

// handlers
// TODO: app.use(app.router);
require('./request-handlers/submit');
require('./request-handlers/pages');
require('./request-handlers/redirects');

app.listen(port);

console.log(`Listening on port ${port}`);
