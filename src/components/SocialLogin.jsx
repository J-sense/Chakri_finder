import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../context/authcontext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state || "/";
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        navigate(from);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-full mt-6">
      <button
        onClick={handleGoogleSignIn}
        className="w-full flex items-center justify-center gap-3 bg-white text-black font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-100 transition duration-300"
      >
        <FcGoogle size={22} />
        Sign in with Google
      </button>
    </div>
  );
};

export default SocialLogin;
