import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const Wrapper = styled("div")({
  flexGrow: 1,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const WelcomeMessage = () => {
  return (
    <Wrapper>
      <Typography sx={{ color: "white", fontSize: "20px" }}>
        No Messages Choosen
      </Typography>
    </Wrapper>
  );
};

export default WelcomeMessage;
