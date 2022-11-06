const friendInvitation = require("../../models/friendInvitation");
const {
  getActiveConnections,
  getSocketServerInstance,
} = require("../../serverStore");

const updateFriendsPendingInvitations = async (userId) => {
  try {
    const pendingInvitations = await friendInvitation
      .find({
        receiverId: userId,
      })
      .populate("senderId", "_id username mail");

    // find all active connections of specific userId
    const receiverList = getActiveConnections(userId);

    const io = getSocketServerInstance();

    receiverList.forEach((receiverSocketId) => {
      io.to(receiverSocketId).emit("friends-invitations", {
        pendingInvitations: pendingInvitations ? pendingInvitations : [],
      });
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { updateFriendsPendingInvitations };
