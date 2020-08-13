const express = require('express');
const bodyParser = require('body-parser');
const authorRoutes = require('./routes/authorRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

app.use(bodyParser.json());

authorRoutes(app);

bookRoutes(app);

/**
 * Put the server to listen requests on 3000 port.
 */
app.listen(3000, () => console.log('Server listening on port 3000'));