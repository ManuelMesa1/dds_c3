const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/index', (req, res) => {
  res.send('Hello World!')
});
app.get('/nosotros.html', (req, res) => {
  res.send('Hello conocenos!')
});

// Require user routes
const userRoutes = require('./src/routers/userRouter')
//Require service routes
const serviceRoutes = require('./src/routers/serviceRouter')
// using as middleware

// app.use('/api/v1/employees', employeeRoutes) // --- NO SE QUE ES ESTO¿?

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});