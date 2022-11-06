const friendInvitation = require("../../models/friendInvitation");
const user = require("../../models/user");
const {
  updateFriendsPendingInvitations,
  updateFriends,
} = require("../../socketHandlers/updates/friends");

const postAccept = async (req, res) => {
  try {
    const { id } = req.body;
    const invitation = await friendInvitation.findById(id);

    if (!invitation) {
      return res.status(401).send("Terjadi kesalahan disisi user");
    }

    const { senderId, receiverId } = invitation;

    const senderUser = await user.findById(senderId);
    senderUser.friends = [...senderUser.friends, receiverId];

    const receiverUser = await user.findById(receiverId);
    receiverUser.friends = [...receiverUser.friends, senderId];

    await senderUser.save();
    await receiverUser.save();

    await friendInvitation.findByIdAndDelete(id);

    updateFriends(senderId.toString());
    updateFriends(receiverId.toString());

    updateFriendsPendingInvitations(receiverId.toString());

    return res.status(200).send("Undangan berhasil diterima");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Terjadi kesalahan. Coba lagi");
  }
};

module.exports = postAccept;
