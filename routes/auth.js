var express = require('express');
var router = express.Router();
var passportGitHub = require('../auth/github');

// github login api to authenticate github network
router.get('/github',
  passportGitHub.authenticate('github', { scope: [ 'user:email' ] }), (err, userData) => {}, function(req, res, next) {
    res.send(userData);
  }
);

// github logged in callback api
router.get('/github/callback',
  passportGitHub.authenticate('github', { failureRedirect: '/login' }, function(err, userData) {}), (req, res) => {
    res.redirect('http://localhost:4200/search');
  }
);

module.exports = router;
