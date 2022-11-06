import axios, { checkResponseCode } from "../config";

export const sendFriendInvitation = async (data) => {
  try {
    return await axios.post("/friend-invitation/invite", data);
  } catch (exception) {
    checkResponseCode(exception);

    return { error: true, exception };
  }
};
export const acceptFriendInvitation = async (data) => {
  try {
    return await axios.post("/friend-invitation/accept", data);
  } catch (exception) {
    checkResponseCode(exception);

    return { error: true, exception };
  }
};
export const rejectFriendInvitation = async (data) => {
  try {
    return await axios.post("/friend-invitation/reject", data);
  } catch (exception) {
    checkResponseCode(exception);

    return { error: true, exception };
  }
};
