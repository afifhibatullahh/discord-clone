import axios, { checkResponseCode } from "../config";

export const sendFriendInvitation = async (data) => {
  try {
    return await axios.post("/friend-invitation/invite", data);
  } catch (exception) {
    checkResponseCode(exception);

    return { error: true, exception };
  }
};
