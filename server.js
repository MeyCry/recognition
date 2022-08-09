const express = require('express');
const app = express();
const path = require('path');
const port = 9001;

app.use(express.static(path.join(__dirname, 'pages')));
app.listen(port);

app.post("/submit", function (req, res) {

  res.send("<div>ok</div>");
});

console.log(`Listening on port ${port}`);
