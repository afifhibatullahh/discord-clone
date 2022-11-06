const { addNewConnectedUser } = require("../serverStore");
const {
  updateFriendsPendingInvitations,
  updateFriends,
} = require("./updates/friends");

const newConnectionHandler = async (socket, io) => {
  const userDetails = socket.user;
  addNewConnectedUser({
    socketId: socket.id,
    userId: userDetails?.userId,
  });

  updateFriendsPendingInvitations(userDetails.userId);
  updateFriends(userDetails.userId);
};

module.exports = newConnectionHandler;
