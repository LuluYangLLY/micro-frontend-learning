import "./set-public-path";

const isLogin = () => {
  const getIsLogin = localStorage.getItem("isLogin");
  return !!getIsLogin && getIsLogin === "true";
};

const login = () => {
  localStorage.setItem("isLogin", "true");
};

const logout = () => {
  localStorage.removeItem("isLogin");
};

// Anything exported from this file is importable by other in-browser modules.
export { isLogin, login, logout };
