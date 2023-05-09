//*dependencies
const express = require('express'); // Importing the express framework
const swaggerUI = require('swagger-ui-express'); // Importing swagger-ui-express to serve Swagger documentation
require('dotenv').config(); // Importing dotenv to manage environment variables
const cors = require('cors'); // Importing cors to enable Cross-Origin Resource Sharing (CORS)
const morgan = require('morgan'); // Importing morgan for HTTP request logging
const session = require('express-session'); // Importing express-session for managing user sessions
const Helmet = require('helmet'); // Importing helmet to secure HTTP headers
const path = require('path'); // Importing path to manage file paths

//*routers
const authRouter = require('./v1/routers/auth.routes.js'); // Importing the authentication router
const booksRouter = require('./v1/routers/booksManage.routes.js') // Importing the books management router

const app = express(); // Creating a new express app

//**Setting */
app.set('port', process.env.PORT || 4000); // Setting the app's port, using an environment variable if available

app.use(session({
    name: 'booksManage', // Setting the session name
    secret: process.env.SESSION_SECRET, // Setting the session secret from environment variables
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // Disabling secure cookies for now
        httpOnly: true,
        // domain: 'example.com',
        // path: 'foo/bar',
        maxAge: 1000 * 60 * 15 // Setting the session max age to 15 minutes
    }
}))


//**middleware */
app.use(morgan('dev')) // Using morgan middleware to log HTTP requests in dev mode
app.use(express.json()) // Using express middleware to parse incoming JSON requests
app.use(cors({
    origin: 'http://localhost:5173', // Allowing requests from this origin
    optionsSuccessStatus: 200
}));
app.use(Helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); // Setting cross-origin resource policy for Helmet middleware
app.use("/uploads", express.static(path.join(__dirname, "./uploads"))); // Serving static files in the uploads folder

//** Routes */
app.use('/api/v1/auth', authRouter) // Using the authentication router for all routes starting with /api/v1/auth
app.use('/api/v1/book', booksRouter) // Using the books management router for all routes starting with /api/v1/book

//* Swagger Documentation
const swaggerDocument = require('./v1/swagger.json'); // Importing the Swagger documentation file
app.use('/api-v1-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument)) // Setting up Swagger documentation endpoint

module.exports = app; // Exporting the app object to be used by other modules
