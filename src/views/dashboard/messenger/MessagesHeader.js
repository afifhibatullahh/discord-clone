import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Avatar from "../../../components/ui/Avatar";

const MainContainer = styled("div")({
  width: "98%",
  display: "columns",
  marginTop: "10px",
});
const MessagesHeader = ({ name = "" }) => {
  return (
    <MainContainer>
      <Avatar large username={name} />
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "white",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        {name}
      </Typography>
    </MainContainer>
  );
};

export default MessagesHeader;
