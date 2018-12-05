const passport = require("passport");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./../keys/keys");

const User = mongoose.model("user");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.clientID,
      clientSecret: keys.clientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({
        googleId: profile.id
      }).then(existingUser => {
        if (existingUser) {
          console.log("###### User exists #####");
          done(null, existingUser);
        } else {
          new User({
            googleId: profile.id
          })
            .save()
            .then(user => {
              console.log("new USER");
              done(null, user);
            });
        }
      });
    }
  )
);
