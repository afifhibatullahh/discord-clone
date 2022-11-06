const conversation = require("../models/conversation");
const message = require("../models/message");
const { updateChatHistory } = require("./updates/chat");

const directMessageHandler = async (socket, data) => {
  try {
    const { userId } = socket.user;
    const { receiverUserId, content } = data;

    const _message = await message.create({
      content: content,
      author: userId,
      date: new Date(),
      type: "DIRECT",
    });

    const _conversation = await conversation.findOne({
      participants: { $all: [userId, receiverUserId] },
    });

    if (_conversation) {
      _conversation.messages.push(_message._id);
      await _conversation.save();
      updateChatHistory(_conversation._id.toString());
    } else {
      const newConversation = await conversation.create({
        messages: [_message._id],
        participants: [userId, receiverUserId],
      });
      updateChatHistory(newConversation._id.toString());
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = directMessageHandler;
