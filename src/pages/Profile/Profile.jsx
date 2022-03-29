import React, { useContext } from "react";
import { AuthContext } from "../../auth/authContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Profile</h1>
      <hr />
      <h6>{user.name}</h6>
    </div>
  );
};

export default Profile;
