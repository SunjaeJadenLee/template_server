const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors')

dotenv.config();

const userRoute = require('./user/index');
const authRoute = require('./user/auth');
const noticeRoute = require('./notice/index');

const App = express();
App.use(cors());
App.use(bodyParser.urlencoded({ extended: false}));
App.use(bodyParser.json());

App.use('/auth',authRoute);
App.use('/user',userRoute);
App.use('/notice',noticeRoute);

App.listen(process.env.PORT,()=>{
    console.log(`PORT ${process.env.PORT} connected!`)
})