const mongoose = require('mongoose');
const mongoConnectString = process.env.MONGODB_URI || 'mongodb://localhost/testdb';

mongoose.connect(mongoConnectString);
mongoose.Promise = global.Promise;
