const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Adam, A01185566, COMP 4964, New Change!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
