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

// Student
const createStudentRouter = require('./Router/Student/createStudentRouter.js');
const findStudentsRouter = require('./Router/Student/findStudentsRouter.js');
const deleteStudentRouter = require('./Router/Student/deleteStudentRouter.js');
const updateStudentRouter = require('./Router/Student/updateStudentRouter.js');

// Class
const createClassRouter = require('./Router/Class/createClassRouter.js');
const findClassesRouter = require('./Router/Class/findClassesRouter.js');
const deleteClassRouter = require('./Router/Class/deleteClassRouter.js');
const updateClassRouter = require('./Router/Class/updateClassRouter.js');
const addtoClassRouter = require('./Router/Class/addtoClassRouter.js');
const removefromClassRouter = require('./Router/Class/removefromClassRouter.js');


// User
const registerUserRouter = require('./Router/User/registerUserRouter.js');
const loginUserRouter = require('./Router/User/loginUserRouter.js');
const findUsersRouter = require('./Router/User/findUsersRouter.js');
const deleteUserRouter = require('./Router/User/deleteUserRouter.js');
const updateUserRouter = require('./Router/User/updateUserRouter.js');
const addtoUserRouter = require('./Router/User/addtoUserRouter.js');
const removefromUserRouter = require('./Router/User/removefromUserRouter.js');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors(corsOptions));

// For Heroku:
mongoose.connect(process.env.MONGODB_URI || 'mongodb://username:abcd1234@ds161391.mlab.com:61391/lambda-labs', { useNewUrlParser: true })
// For Local:
// mongoose.connect('mongodb://username:abcd1234@ds161391.mlab.com:61391/lambda-labs', { useNewUrlParser: true })

.then(() => console.log('\n===connected to mongo===\n'))
.catch(err =>console.log('not connected'))

// ========== ROUTES ========== //

server.get('/', function(req, res) {
  res.send({ api: 'up and flying' });
});

// ======== ROUTERS .use ========== //

// Student
server.use('/api/createstudent/', createStudentRouter);
server.use('/api/students/', findStudentsRouter);
server.use('/api/deletestudent/', deleteStudentRouter);
server.use('/api/updatestudent/', updateStudentRouter);

// Class
server.use('/api/createclass/', createClassRouter);
server.use('/api/classes/', findClassesRouter);
server.use('/api/deleteclass/', deleteClassRouter);
server.use('/api/updateclass/', updateClassRouter);
server.use('/api/addtoclass/', addtoClassRouter); // Adds users or students to ref arrays
server.use('/api/removefromclass/', removefromClassRouter);

// User
server.use('/api/register/', registerUserRouter);
server.use('/api/login/', loginUserRouter);
server.use('/api/users/', findUsersRouter);
server.use('/api/deleteuser/', deleteUserRouter);
server.use('/api/updateuser/', updateUserRouter);
server.use('/api/addtouser/', addtoUserRouter); // Adds classes to ref arrays
server.use('/api/removefromuser/', removefromUserRouter);

server.listen(port, () => console.log('API on port 5000...or wherever Heroku is'));