import { Tooltip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomPrimaryButton from "../../../components/button/CustomPrimaryButton";
import RedirectInfo from "../../../components/ui/RedirectInfo";

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToLoginPage = () => {
    navigate("/login");
  };

  const getFormNotValidMessage = () => {
    return "Enter correct e-mail address and password should contains between 6 and 12 characters ";
  };
  const getFormValidMessage = () => {
    return "Press to Register!";
  };
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label={"Register"}
            additionalStles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text={"Already have an account? "}
        redirectText={"Sign in"}
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};

export default RegisterPageFooter;
