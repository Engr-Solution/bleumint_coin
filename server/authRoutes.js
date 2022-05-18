const express = require('express');
const AuthRouter = express.Router();
const passport = require('passport');
const { checkAuth, checkNotAuth } = require('./middlewares/authMiddleware');
const app = express();

app.use(passport.initialize());
app.use(passport.session());

AuthRouter.get('/', checkAuth, (req, res) => {
  res.redirect('/dashboard');
});

AuthRouter.get('/login', checkNotAuth, (req, res) => {
  res.redirect('/login');
});

// Google Auth Route
AuthRouter.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);

AuthRouter.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/login',
  }),
);

// Facebook Auth Route
AuthRouter.get(
  '/auth/facebook',
  passport.authenticate('facebook', { scope: ['profile', 'email'] }),
);

AuthRouter.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/login',
  }),
);

// Twitter Auth Route
AuthRouter.get(
  '/auth/twitter',
  passport.authenticate('twitter', { scope: ['profile', 'email'] }),
);

AuthRouter.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/login',
  }),
);

// Logout Routes
AuthRouter.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/login');
});

module.exports = AuthRouter;
