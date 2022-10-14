import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthBox from "../../../components/box/AuthBox";
import { getActions } from "../../../store/actions/authActions";
import { validateRegisterForm } from "../../../utils/validator";
import RegisterPageFooter from "./RegisterPageFooter";
import RegisterPageInputs from "./RegisterPageInputs";

const RegisterPage = ({ register }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ email, username, password }));
  }, [email, username, password, setIsFormValid]);

  const handleRegister = () => {
    const userDetails = {
      email,
      password,
      username,
    };
    console.log(userDetails);
    register(userDetails, navigate);
  };

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <RegisterPageInputs
        email={email}
        setEmail={setEmail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(RegisterPage);
