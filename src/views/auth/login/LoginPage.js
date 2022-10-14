import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthBox from "../../../components/box/AuthBox";
import { getActions } from "../../../store/actions/authActions";
import { validateLoginForm } from "../../../utils/validator";
import LoginPageFooter from "./LoginPageFooter";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";

const LoginPage = ({ login }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isFormValid, setIsFormValid] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(validateLoginForm({ email, password }));
  }, [email, password, setIsFormValid]);

  const handleLogin = () => {
    const userDetails = {
      email,
      password,
    };
    login(userDetails, navigate);
  };

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(LoginPage);
