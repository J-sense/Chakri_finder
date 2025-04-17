import React, { useContext, useEffect } from "react";
import AuthContext from "../context/authcontext/AuthContext";

const Myapplication = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/job-applications?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching applications:", error);
        });
    }
  }, [user?.email]); // Run only when user.email changes

  return <div></div>;
};

export default Myapplication;
