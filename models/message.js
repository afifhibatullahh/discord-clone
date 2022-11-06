const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  content: {
    type: String,
  },
  date: { type: Date },
  type: { type: String },
});

module.exports = mongoose.model("message", messageSchema);
