import axios from "../config";

export const login = async (data) => {
  try {
    return await axios.post("/auth/login", {
      mail: data.email,
      password: data.password,
    });
  } catch (exception) {
    return { error: true, exception };
  }
};

export const register = async (data) => {
  try {
    return await axios.post("/auth/register", {
      username: data.username,
      mail: data.email,
      password: data.password,
    });
  } catch (exception) {
    return { error: true, exception };
  }
};
