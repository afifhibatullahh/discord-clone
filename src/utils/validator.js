export const validateLoginForm = ({ email, password }) => {
  const isMailValid = validateMail(email);
  const isPasswordValid = validatePassword(password);
  return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({ email, username, password }) => {
  const isMailValid = validateMail(email);
  const isPasswordValid = validatePassword(password);
  return isMailValid && isPasswordValid && validateUsername(username);
};

const validateMail = (mail) => {
  const regexMail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return regexMail.test(mail);
};
const validatePassword = (password) => {
  return password?.length > 6 && password?.length < 12;
};
const validateUsername = (username) => {
  return username?.length > 2 && username?.length < 13;
};
