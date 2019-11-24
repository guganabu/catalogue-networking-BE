var passport = require('passport')
  , GitHubStrategy = require('passport-github').Strategy;
var User = require('../models/User');

passport.use(new GitHubStrategy({
    clientID: "9415772fc915d8810e66",
    clientSecret: "d5956b34498da9b79bdc2bae12f7035b9aaa4944",
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({user_id: profile.id}, {name: profile.displayName,user_id: profile.id, provide: profile.provider}, function (err, user) {
      return done(err, user);
    });
  }
));

module.exports = passport;
