import { endPoints } from "../const/endPoints";

export const GetUser = async () => {
  const user = await fetch(endPoints.get_user, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("at")}`,
    },
  });
  const userData = await user.json();
  return userData;
};
