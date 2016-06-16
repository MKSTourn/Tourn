const UsersSchema = require('../schemas/users.js');
// const uuid = require('uuid');

const Users = module.exports;

// Instantiation functions

Users.create = () => new Promise((resolve, reject) => {
  UsersSchema.create({}, (err, result) => {
    if (err) reject(err);
    resolve(result);
  });
});

// Search functions

Users.findById = (userid) => new Promise((resolve, reject) => {
  UsersSchema.findById(userid, (err, result) => {
    if (err) reject(err);
    resolve(result);
  });
});

Users.findByToken = (sessiontoken) => new Promise((resolve, reject) => {
  UsersSchema.findOne({ sessions: { token: sessiontoken } }, (err, result) => {
    if (err) reject(err);
    resolve(result);
  });
});
