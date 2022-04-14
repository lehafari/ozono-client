const base_url = "http://localhost:3333";
export const endPoints = {
  //auth
  signup: `${base_url}/auth/signup`,
  signin: `${base_url}/auth/signin`,
  logout: `${base_url}/auth/logout`,
  refresh_token: `${base_url}/auth/refresh`,

  //user
  get_user: `${base_url}/users/me`,
};
