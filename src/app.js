const express = require('express');
const swaggerUI = require('swagger-ui-express');
require('dotenv').config();
const app = express();
const cors = require('cors');

const V1Router  = require('./v1/routers/router.js');


//**Setting */
app.set('port', process.env.PORT || 4000);

//**middleware */
app.use(express.json())
app.use(cors());

//** Routes */
app.use('/api/v1/', V1Router)


module.exports = app