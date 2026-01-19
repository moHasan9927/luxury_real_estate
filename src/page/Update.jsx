import React, { useContext } from "react";
import AuthContext from "../Authentication/Authcontext";

const Update = () => {
  const { user, loading } = useContext(AuthContext);
  return (
    <div>
      {loading && (
        <div className="h-screen flex justify-center items-center">
          Loading...
        </div>
      )}
      <h1>{!loading && user && user?.email}</h1>
    </div>
  );
};

export default Update;
