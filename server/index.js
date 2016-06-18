// Initialize our database connection
require('./database-config.js');

// Initialize our webserver
const express = require('express');

// Request monitoring middleware
const morgan = require('morgan');

// Client source bundle generator
const webpack = require('webpack');
const webpackMiddleWare = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config');
const uuid = require('uuid')
// Setup web server
const app = express();

// Setup socket listener
const http = require('http');
const server = new http.Server(app);
const io = require('socket.io')(server);

require('./routes/socketHandler').socket(io);

// Setup webpack configuration
const config = webpack(webpackConfig);

// Setup routes

// Attach morgan, a request logging middleware, to all routes
app.use(morgan(':method :url :response-time :status'));

// Attach webpack's middleware to /app-bundle.js endpoint
app.use(webpackMiddleWare(config, {}));

// facebookAuthFn(app);
// Attach static assets to /static/ endpoint
app.use('/', express.static(`${__dirname}/../client/public/`));

app.get('/', (req, res) => {
  res.redirect('/index.html');
});

// Start listening to a port defined by the environment or 4000
const port = process.env.PORT || 4000;
console.log(`Listening on port: ${port}`);

// Attach our authorization module to the app.
const auth = require('./routes/auth.js');
auth.app(app);
auth.socket(io);
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const session = require('express-session');

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

require('./database-config.js');
const Users = require('./models/users.js');

//
// creates unique UUID for session
//
app.use(session({
  genid: () => uuid(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 365 * 24 * 60 * 60 * 1000 }, //
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth/', bodyParser.json());
//
// serialize and deserialize session token
//
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});


//* **************Facebook Authentication Routing********************
passport.use(new FacebookStrategy({
  clientID: '986354861484992',
  clientSecret: '7966d7fab2fd294004fd28622a1aaad8',
  callbackURL: 'http://localhost:4000/auth/facebook/callback',
},
  (accessToken, refreshToken, profile, done) => {
    const id = profile.id;
    console.log('accessToken:', accessToken);
    // console.log("refreshToken:", refreshToken);
    console.log('profile:', profile.displayName);
    console.log("done:", done);
    console.log('id:', id);

    //
    // Functions below are exampleS of calling server models here.
    //

    Users.findByFacebookId(id)
      .then((result) => {
        if (!result) {
          Users.create(profile.displayName, id)
            .then((user) => {
              done(null, user, 'login worked');
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          // Generate a session token
          done(null, result, 'logged in');
        }
      })
      .catch((err) => {
        console.log('Users findByFacebookId error in facebook auth: ', err);
        done(err, 'attempted to log in.');
      });
  }
));

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
app.get('/auth/facebook', passport.authenticate('facebook'), (req, res) => {
  // available callback function
});

app.get('/auth/test', (req, res) => {
  if (req.user) {
    console.log(req.user);
    res.send('Hello authed user!');
  } else {
    res.send('Auth failed.');
  }
});

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/login',
  }),
  (req, res) => {
    res.redirect('/');
  }
);
//* *****************************************************************

server.listen(port);
