import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Authorization = () => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <div>You are not authorized to view this page.</div>;
  }

  return (
    <div>
      <h1>Authorized</h1>
    </div>
  );
};

export default Authorization;