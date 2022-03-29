export const userInit = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};
