const passport = require('passport');
const userModel = require('../server/authDB/user.model');
const userService = require('../server/authDB/user.service');
const TwitterStrategy = require('passport-twitter').Strategy;

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CLIENT_ID,
      consumerSecret: process.env.TWITTER_CLIENT_SECRET,
      callbackURL: '/auth/twitter/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      const id = profile.id;
      const email = profile.emails[0].value;
      const firstName = profile.name.givenName;
      const lastName = profile.name.familyName;
      const profilePhoto = profile.photos[0].value;
      const source = "twitter";
  
  
      const currentUser = await userService.getUserByEmail({ email })
  
      if (!currentUser) {
        const newUser = await userService.addTwitterUser({
          id,
          email,
          firstName,
          lastName,
          profilePhoto
        }, source)
        return done(null, newUser);
      }
  
      if (currentUser.source != "twitter") {
        //return error
        return done(null, false, { message: `You have previously signed up with a different signin method` });
      }
  
      currentUser.lastVisited = new Date();
      return done(null, currentUser);
    }
  )
  );

passport.serializeUser((user, done) => {
  process.nextTick(function() {
    done(null, { id: user.id, username: user.username, name: user.name });
  });
});
passport.deserializeUser(async (user, done) => {
  const currentUser = await userModel.findOne({ id });
  done(null, currentUser);
});
