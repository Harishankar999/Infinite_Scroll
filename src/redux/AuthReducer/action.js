export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const loginFun = () => {
  return {
    type: LOGIN,
  };
};

export const logoutFun = () => {
  return {
    type: LOGOUT,
  };
};
