const dotenv = require('dotenv');
const connectToDataBase = require('./src/database/connect');
require('./express')

dotenv.config();
connectToDataBase();
