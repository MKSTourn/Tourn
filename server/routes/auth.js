const express = require('express');
const router = express.Router();

// Session dependencies set
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// To store sessions in mongo instead of memory, for persistance between server resets
const mongoose = require('mongoose');
const session = require('express-session');
require('../database-config.js');
const MongoStore = require('connect-mongo')(session);


// Passport dependencies set
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

// Socket Passport
const passportSocket = require('passport.socketio');

// Database
const Users = require('../models/users.js');

// Unique User ids
const uuid = require('uuid');

// Setup Passport
passport.use(new FacebookStrategy({
  clientID: '986354861484992',
  clientSecret: '7966d7fab2fd294004fd28622a1aaad8',
  // callbackURL: 'http://192.168.144.245:4000/auth/facebook/callback',
  callbackURL: `${process.env.CALLBACK_URL}/auth/facebook/callback`,
  profileFields: ['id', 'displayName', 'name', 'gender', 'emails', 'photos'],
},
  (accessToken, refreshToken, profile, done) => {
    const id = profile.id;
    // console.log('accessToken:', accessToken);
    // console.log('refreshToken:', refreshToken);
    // console.log('profile:', profile);
    console.log('profile picture:', profile.photos[0].value);
    // console.log('done:', done);
    // console.log('id:', id);

    // Interface with our defined user model to retrieve information and validate/initialize a user
    Users.findByFacebookId(id)
      .then((result) => {
        if (!result) {
          Users.create(profile.displayName, id, profile.photos[0].value)
            .then((user) => {
              // User didn't exist, so we created one and passed it back.
              done(null, user, 'login worked');
            })
            .catch((err) => {
              // console.log(err);
            });
        } else {
          // User exists, so we pass what we got back.
          done(null, result, 'logged in');
        }
      })
      .catch((err) => {
        // console.log('Users findByFacebookId error in facebook auth: ', err);
        done(err, 'attempted to log in.');
      });
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Authentication routes

router.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email'}));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/login',
  }),
  (req, res) => {
    res.redirect('/');
  }
);

router.get('/auth/test', (req, res) => {
  if (req.user) {
    // console.log(req.user);
    res.send('Hello authed user!');
  } else {
    res.send('Auth failed.');
  }
});

// We take in the main express app and set it up to use our authentication stack.

const sessionStore = new MongoStore({ mongooseConnection: mongoose.connection });

module.exports.app = function addAuthenticationMiddleware(app) {
  app.use(session({
    genid: () => uuid(),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 365 * 24 * 60 * 60 * 1000 },
    store: sessionStore,
  }));
  app.use(cookieParser());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use('/auth/', bodyParser.json());
  app.use(router);
};

module.exports.socket = function addSocketAuthenticationMiddleware(io) {
  io.set('authorization', passportSocket.authorize({
    genid: () => uuid(),
    cookieParser,       // the same middleware you registrer in express
    key: 'connect.sid',       // the name of the cookie where express/connect stores its session_id
    secret: 'keyboard cat',    // the session_secret to parse the cookie
    store: sessionStore,        // we NEED to use a sessionstore. no memorystore please
  }));
};
