import { endPoints } from "../../const/endPoints";

export const refreshToken = async () => {
  const rt = localStorage.getItem("rt");
  if (!rt) return false;

  const res = await fetch(endPoints.refresh_token, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${rt}`,
    },
  });

  if (res.status === 200) {
    const data = await res.json();
    localStorage.setItem("at", data.access_token);
    localStorage.setItem("rt", data.refresh_token);
    return true;
  }

  return false;
};
