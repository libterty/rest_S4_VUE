let express = require('express');
const app = express();
const serveStatic = require("serve-static")
const path = require('path');
const port = process.env.PORT || 5000;

app.use(serveStatic(path.join(__dirname, 'dist')));

app.listen(port);
console.log('server started '+ port);