import React from "react";
import InputWithLabel from "../../../components/input/InputWithLabel";

const LoginPageInputs = (props) => {
  const { email, setEmail, password, setPassword } = props;
  return (
    <>
      <InputWithLabel
        value={email}
        setValue={setEmail}
        label="E-mail"
        type="text"
        placeholder="Enter e-mail address"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
      />
    </>
  );
};

export default LoginPageInputs;
