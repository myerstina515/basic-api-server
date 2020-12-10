'use strict';

const express = require('express');
const app = express();

// our middleware:
const notFoundHandler = require('./error-handlers/404');
const serverError = require('./error-handlers/500');
const logger = require('./middleware/logger');
const foodRoutes = require('./routes/food');
const clothesRoutes = require('./routes/clothes');


// my middleware:
app.use(express.json());
app.use(logger);
app.use(foodRoutes);
app.use(clothesRoutes);

//proof of life route:
app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.use('*', notFoundHandler);
app.use(serverError);


module.exports = {
  server: app,
  start: port => {
    if(!port) {throw new Error('missing port');}
    app.listen(port, () => {
      console.log(`server up on ${port}`);
    });
  },
};


