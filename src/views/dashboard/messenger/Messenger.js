import React from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import WelcomeMessage from "./WelcomeMessage";
import MessageContent from "./MessageContent";

const MainContainer = styled("div")({
  flexGrow: 1,
  backgroundColor: "#36393f",
  marginTop: "48px",
  display: "flex",
});

const Messenger = ({ chosenChatDetails }) => {
  return (
    <MainContainer>
      {!chosenChatDetails ? (
        <WelcomeMessage />
      ) : (
        <MessageContent chosenChatDetails={chosenChatDetails} />
      )}
    </MainContainer>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state.chat,
  };
};

export default connect(mapStoreStateToProps)(Messenger);
