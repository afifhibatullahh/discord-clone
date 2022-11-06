const conversation = require("../models/conversation");
const { updateChatHistory } = require("./updates/chat");

const directChatHistoryHandler = async (socket, data) => {
  try {
    const { userId } = socket.user;
    const { receiverUserId } = data;

    const _conversation = await conversation.findOne({
      participants: { $all: [userId, receiverUserId] },
      type: "DIRECT",
    });

    if (_conversation) {
      updateChatHistory(_conversation._id.toString(), socket.id);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = directChatHistoryHandler;
