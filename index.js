const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("./keys/keys");
const cookieSession = require("cookie-session");
const app = express();
mongoose.connect(keys.mongoURI);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookie]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./model/User");

require("./service/passport");
require("./routes/authRoutes")(app);

app.listen(3200, () => {
  console.log("server running at 3200");
});
