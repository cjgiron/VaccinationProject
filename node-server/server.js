const express = require('express'); // imported express module or top level class of express
const port = 9090;
const app = express(); //by invoking top level class we are initializing the application
const cors = require("cors");
const router = require('./route/router');
const vaccineRouter = require('./route/vaccineRouter');
const hospitalRouter = require('./route/hospitalRouter');
const userRouter = require('./route/userRouter');
const appointmentRouter = require('./route/appointmentRouter');

const vaccineApp = express();
const hospitalApp = express();
const userApp = express();
const appointmentApp = express();

app.use(cors()); //cors - middleware is passed in express application to api's being public at global level, make all api's public
app.use(express.json({limit:'2mb', extended:false})); //json middle-ware for setting request content type

app.use('/static', express.static('public')); // serve static files like images css using static middle ware

app.use('/vaccine', vaccineApp);
vaccineApp.use('/', vaccineRouter);

app.use('/hospital', hospitalApp);
hospitalApp.use('/', hospitalRouter);

app.use('/user', userApp);
userApp.use('/', userRouter);

app.use('/appointment', appointmentApp);
appointmentApp.use('/', appointmentRouter);

app.use('/', router); // all the requests coming to express app are routed to router.js

console.log(`we are listening on port ${port} with url http://localhost:9090`)
app.listen(port)