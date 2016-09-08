const express = require('express');
const app = express();
// const User = require('./models/users');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const cookieSession = require('cookie-session');
const session = require('express-session');
const uuid = require('uuid-v4');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

//
// Create unique UUID for session
//
app.use(session({
  genid: () => uuid(),
  // genid: function(req) {
  //   return uuid();
  // },
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 100000 },
}));

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth/', bodyParser.json());

//
// Serialize and deserialize session token
//
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});


//***************Facebook Authentication Routing********************

passport.use(new FacebookStrategy({
    clientID: 'CLIENT_ID',
    clientSecret: 'SECRET_KEY',
    callbackURL: "http://localhost:4000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    var _id = profile.id;
    console.log("accessToken:", accessToken);
    // console.log("refreshToken:", refreshToken);
    console.log("profile:", profile.displayName);
    // console.log("done:", done);
    console.log("id:", _id);

    //
    // Functions below are exampleS of calling server models here.
    //

    // User.findById(_id)
    // .then(function(response){
    //   console.log("userRes:", response);
    // })
    // .catch(function(error){
    //   console.error("userResErr: ", error);
    // })
    //
    // User.create(_id, profile.displayName)
    // .then(function(user){
    //   console.log("newUserRes:", user);
    //   return done(null, user);
    // })
    // .catch(function(error){
    //   return done(error);
    // })
    return done(null, 'login worked');
  }
));

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
app.get('/auth/facebook', passport.authenticate('facebook'), function(req, res){
	// available callback function
});

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
  	failureRedirect: '/login'
  }),
  function(req, res){
    res.redirect('/');
  }
);
//******************************************************************
