const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

// ========== MIDDLEWARE ============== //

const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// CORS - OPTIONS, to fix "No 'Access-Control-Allow-Origin' header" issue

const corsOptions = {
  origin: '*',
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

// ======== ROUTER requires ======== //

// Note
const createClassRouter = require('./Class/createClassRouter.js');
const findClassesRouter = require('./Class/findClassesRouter.js');
const deleteClassRouter = require('./Class/deleteClassRouter.js');
const updateClassRouter = require('./Class/updateClassRouter.js');

// User
const registerUserRouter = require('./User/registerUserRouter.js');
const loginUserRouter = require('./User/loginUserRouter.js');
const findUsersRouter = require('./User/findUsersRouter.js');
const deleteUserRouter = require('./User/deleteUserRouter.js');
const updateUserRouter = require('./User/updateUserRouter.js');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors(corsOptions));

mongoose.connect('mongodb://lambda_labs_backend:_sJ7X3;{pWfzfMR@ds239681.mlab.com:39681/lambda_labs_backend_database', { useNewUrlParser: true })

.then(() => console.log('\n===connected to mongo===\n'))
.catch(err =>console.log('not connected'))

// ========== ROUTES ========== //

server.get('/', function(req, res) {
  res.send({ api: 'up and running' });
});

// const setupRoutes = require('./setup/routes')(server);

// ======== ROUTERS .use ========== //

// Class
server.use('/api/createclass', createClassRouter);
server.use('/api/viewclasses', findClassesRouter);
server.use('/api/deleteclass', deleteClassRouter);
server.use('/api/updateclass', updateClassRouter);

// User
server.use('/api/register', registerUserRouter);
server.use('/api/login', loginUserRouter);
server.use('/api/viewusers', findUsersRouter);
server.use('/api/deleteuser', deleteUserRouter);
server.use('/api/updateuser', updateUserRouter);

server.listen(port, () => console.log('API on port 5000...or wherever Heroku is'));