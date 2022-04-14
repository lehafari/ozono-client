import { endPoints } from "../const/endPoints";
import { refreshToken } from "../context/auth/refreshToken";

export const GetUser = async () => {
  const at = localStorage.getItem("at");
  if (!at) return { logged: false };

  const res = await fetch(endPoints.get_user, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("at")}`,
    },
  });

  if (res.status === 200) {
    const user = await res.json();
    return user;
  }

  const rt = refreshToken(); // usar el refresh token para obtener un nuevo access token
  if (!rt) {
    localStorage.removeItem("at");
    localStorage.removeItem("rt");
    return { logged: false };
  }

  const res2 = await fetch(endPoints.get_user, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("at")}`,
    },
  });

  if (res2.status === 200) {
    const user = await res2.json();
    return user;
  }

  return { logged: false };
};
