const friendInvitation = require("../../models/friendInvitation");
const user = require("../../models/user");
const {
  updateFriendsPendingInvitations,
} = require("../../socketHandlers/updates/friends");

const postReject = async (req, res) => {
  try {
    const { id } = req.body;
    const { userId } = req.user;
    const invitationExists = await friendInvitation.exists({
      _id: id,
    });

    if (invitationExists) {
      await friendInvitation.findByIdAndDelete(id);
    }

    updateFriendsPendingInvitations(userId);

    return res.status(200).send("Undangan berhasil ditolak");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Terjadi kesalahan. Coba lagi");
  }
};

module.exports = postReject;
