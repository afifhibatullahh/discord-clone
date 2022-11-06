const express = require("express");
const router = express.Router();
const Joi = require("joi");
const friendInvitationControllers = require("../controllers/friendInvitation/friendInvitationControllers");

const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth");

const postFriendInvitationSchema = Joi.object({
  targetMailAddress: Joi.string().email(),
});
const invitationDecisionSchema = Joi.object({
  id: Joi.string().required(),
});

router.post(
  "/invite",
  auth,
  validator.body(postFriendInvitationSchema),
  friendInvitationControllers.controllers.postInvite
);

router.post(
  "/accept",
  auth,
  validator.body(invitationDecisionSchema),
  friendInvitationControllers.controllers.postAccept
);

router.post(
  "/reject",
  auth,
  validator.body(invitationDecisionSchema),
  friendInvitationControllers.controllers.postReject
);

module.exports = router;
