import { Tooltip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomPrimaryButton from "../../../components/button/CustomPrimaryButton";
import RedirectInfo from "../../../components/ui/RedirectInfo";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToRegisterPage = () => {
    navigate("/register");
  };

  const getFormNotValidMessage = () => {
    return "Enter correct e-mail address and password should contains between 6 and 12 characters ";
  };
  const getFormValidMessage = () => {
    return "Press to log in!";
  };
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label={"Log in"}
            additionalStles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text={"Need an account? "}
        redirectText={"Create an account"}
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
};

export default LoginPageFooter;
