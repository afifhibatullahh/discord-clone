import { styled } from "@mui/system";
import React, { useEffect } from "react";
import AppBar from "./appbar/AppBar";
import FriendsSideBar from "./friends-sidebar/FriendsSideBar";
import Messenger from "./messenger/Messenger";
import SideBar from "./sidebar/SideBar";
import { getActions } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { logout } from "../../utils/auth";
import { connectWithSocketServer } from "../../realtimeCommunication/socketConnection";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = ({ setUserDetails }) => {
  useEffect(() => {
    const userDetails = localStorage.getItem("user");

    if (!userDetails) {
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
      connectWithSocketServer();
    }
  }, []);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Dashboard);
