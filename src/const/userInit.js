import { GetUser } from "../helpers/GetUser";

export const userInit = () => {
  const user = GetUser();
  const userData = {
    logged: true,
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
    gender: user.gender,
    country: user.country,
    image: user.image,
    ci: user.ci,
    phone: user.phone,
    role: user.role,
  };

  return userData;
};
