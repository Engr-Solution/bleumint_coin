const checkAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/login");
  };
  
  const checkNotAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
      return res.redirect("/dashboard");
    }
    next();
  };
  
  module.exports = { checkAuth, checkNotAuth };