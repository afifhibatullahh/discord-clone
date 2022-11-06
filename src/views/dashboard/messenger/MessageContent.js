import { styled } from "@mui/system";
import React, { useEffect } from "react";
import { getDirectChatHistory } from "../../../realtimeCommunication/socketConnection";
import Messages from "./Messages";
import NewMessageInput from "./NewMessageInput";

const Wrapper = styled("div")({
  flexGrow: 1,
});

const MessageContent = ({ chosenChatDetails }) => {
  useEffect(() => {
    getDirectChatHistory({
      receiverUserId: chosenChatDetails.id,
    });
  }, [chosenChatDetails]);
  return (
    <Wrapper>
      <Messages />
      <NewMessageInput />
    </Wrapper>
  );
};

export default MessageContent;
