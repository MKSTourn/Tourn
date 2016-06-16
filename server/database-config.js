const mongoose = require('mongoose');

const mongoConnectString = process.env.MONGOSTRING || 'mongodb://localhost/testdb';
mongoose.connect(mongoConnectString);
