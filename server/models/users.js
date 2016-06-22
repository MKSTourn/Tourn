const UsersSchema = require('../schemas/users.js');
// const uuid = require('uuid');

const Users = module.exports;
const uuid = require('uuid');

// Instantiation functions

Users.create = (name, fbid) => new Promise((resolve, reject) => {
  UsersSchema.create({ name, fbid }, (err, result) => {
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

Users.findByFacebookId = (facebookid) => new Promise((resolve, reject) => {
  UsersSchema.findOne({ fbid: facebookid }, (err, result) => {
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
