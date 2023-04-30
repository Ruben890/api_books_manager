//*dependencies
const express = require('express');
const swaggerUI = require('swagger-ui-express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const Helmet = require('helmet');
//*routers
const authRouter = require('./v1/routers/auth.routes.js');
const booksRouter = require('./v1/routers/booksManage.routes.js')


const app = express();

//**Setting */
app.set('port', process.env.PORT || 4000);
app.use(session({
    name: 'booksManage',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        // domain: 'example.com',
        // path: 'foo/bar',
        maxAge: 1000 * 60 * 15
    }
}))

//**middleware */
app.use(morgan('dev'))
app.use(express.json())
app.use(cors());
app.use(Helmet());


//** Routes */
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/book', booksRouter)



//* Swagger Documentation
const swaggerDocument = require('./v1/swagger.json');
app.use('/api-v1-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

module.exports = app