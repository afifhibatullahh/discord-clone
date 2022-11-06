const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const conversationSchema = new Schema({
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "message",
    },
  ],
});

module.exports = mongoose.model("conversation", conversationSchema);
