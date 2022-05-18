const express = require("express");
const authRouter = express.Router();
const passport = require("passport");
const { checkAuth, checkNotAuth } = require("./middlewares/authMiddleware");

authRouter.get("/", checkAuth, (req, res) => {
  res.redirect("/dashboard");
});

authRouter.get("/login", checkNotAuth, (req, res) => {
  res.redirect("/login");
});

// Google Auth Route
authRouter.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

authRouter.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successReturnToOrRedirect: "/",
    failureRedirect: "/login",
  }),
);

// Facebook Auth Route
authRouter.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: ["profile", "email"] }),
);

authRouter.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successReturnToOrRedirect: "/",
    failureRedirect: "/login",
  }),
);

// Twitter Auth Route
authRouter.get(
  "/auth/twitter",
  passport.authenticate("twitter", { scope: ["profile", "email"] }),
);

authRouter.get(
  "/auth/twitter/callback",
  passport.authenticate("twitter", {
    successReturnToOrRedirect: "/",
    failureRedirect: "/login",
  }),
);

// Logout Routes
authRouter.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
});

module.exports = authRouter;
