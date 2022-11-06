const friendInvitation = require("../../models/friendInvitation");
const user = require("../../models/user");
const {
  getActiveConnections,
  getSocketServerInstance,
} = require("../../serverStore");

const updateFriendsPendingInvitations = async (userId) => {
  try {
    const receiverList = getActiveConnections(userId);
    if (receiverList.length > 0) {
      const pendingInvitations = await friendInvitation
        .find({
          receiverId: userId,
        })
        .populate("senderId", "_id username mail");

      const io = getSocketServerInstance();

      receiverList.forEach((receiverSocketId) => {
        io.to(receiverSocketId).emit("friends-invitations", {
          pendingInvitations: pendingInvitations ? pendingInvitations : [],
        });
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const updateFriends = async (userId) => {
  try {
    const receiverList = getActiveConnections(userId);
    if (receiverList.length > 0) {
      const _user = await user
        .findById(userId, { _id: 1, friends: 1 })
        .populate("friends", "_id username mail");

      if (_user) {
        const friendsList = _user.friends.map((friend) => {
          return {
            id: friend._id,
            mail: friend.mail,
            username: friend.username,
          };
        });

        const io = getSocketServerInstance();

        receiverList.forEach((receiver) => {
          io.to(receiver).emit("friends-list", {
            friends: friendsList ? friendsList : [],
          });
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { updateFriendsPendingInvitations, updateFriends };
