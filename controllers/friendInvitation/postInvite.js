const friendInvitation = require("../../models/friendInvitation");
const user = require("../../models/user");

const postInvite = async (req, res) => {
  const { targetMailAddress } = req.body;
  const { userId, mail } = req.user;

  if (mail.toLowerCase() === targetMailAddress.toLowerCase()) {
    return res
      .status(409)
      .send("Tidak bisa menambahkan teman dengan akun anda sendiri");
  }

  const targetUser = await user.findOne({
    mail: targetMailAddress.toLowerCase(),
  });

  if (!targetUser) {
    return res
      .status(404)
      .send(
        `User dengan email ${targetMailAddress} tidak ditemukan. Tolong periksa kembali alamat email`
      );
  }

  const invitationAlreadyReceived = await friendInvitation.findOne({
    senderId: userId,
    receiverId: targetUser._id,
  });

  if (invitationAlreadyReceived) {
    return res.status(409).send("Undangan sudah terkirim");
  }

  const userAlreadyFriends = targetUser.friends.find(
    (friendId) => friendId.toString() === userId.toString()
  );

  if (userAlreadyFriends) {
    return res.status(409).send("User sudah ada di list teman");
  }

  const newInvitation = await friendInvitation.create({
    senderId: userId,
    receiverId: targetUser._id,
  });

  return res.status(201).send("Undangan telah dikirim");
};

module.exports = postInvite;
