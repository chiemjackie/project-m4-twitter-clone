import React, { useContext } from "react";

import { CurrentUserProvider } from "./CurrentUserContext";

function Profile() {
  const { currentUser, status } = useContext(CurrentUserProvider);
  console.log(currentUser);
  console.log(status);

  if (status === "idle") {
    return <div>Profile</div>;
  }
}

export default Profile;
