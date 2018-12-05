const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  googleId: String
});
mongoose.model("user", schema);
