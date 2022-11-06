const Conversation = require("../../models/conversation");
const {
  getSocketServerInstance,
  getActiveConnections,
} = require("../../serverStore");

const updateChatHistory = async (
  conversationId,
  toSpecifiedSocketId = null
) => {
  const conversation = await Conversation.findById(conversationId).populate({
    path: "messages",
    model: "message",
    populate: {
      path: "author",
      model: "user",
      select: "username _id",
    },
  });

  if (conversation) {
    const io = getSocketServerInstance();

    if (toSpecifiedSocketId) {
      return io.to(toSpecifiedSocketId).emit("direct-chat-history", {
        messages: conversation.messages,
        participants: conversation.participants,
      });
    }

    conversation.participants.forEach((userId) => {
      const activeConnections = getActiveConnections(userId.toString());

      activeConnections.forEach((socketId) => {
        io.to(socketId).emit("direct-chat-history", {
          messages: conversation.messages,
          participants: conversation.participants,
        });
      });
    });
  }
};

module.exports = { updateChatHistory };
