import React, { useEffect, useState } from "react";
import AuthBox from "../../../components/box/AuthBox";
import { validateLoginForm } from "../../../utils/validator";
import LoginPageFooter from "./LoginPageFooter";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ email, password }));
  }, [email, password, setIsFormValid]);

  const handleLogin = () => {};

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

export default LoginPage;
