//*dependencies
const express = require('express');
const swaggerUI = require('swagger-ui-express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
//*routers
const authRouter = require('./v1/routers/auth.routes.js');
const booksRouter = require('./v1/routers/booksManage.routes.js')


const app = express();

//**Setting */
app.set('port', process.env.PORT || 4000);


//**middleware */
app.use(morgan('dev'))
app.use(express.json())
app.use(cors());


//** Routes */
app.use('/api/v1/auth', authRouter)
app.use('api/v1/boosk ', booksRouter)



//* Swagger Documentation
const swaggerDocument = require('./v1/swagger.json');
app.use('/api-v1-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

module.exports = app