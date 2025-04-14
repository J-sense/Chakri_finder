import React, { useContext } from "react";
import AuthContext from "../context/authcontext/AuthContext";
import SocialLogin from "../components/SocialLogin";

const SignIn = () => {
  const { singIn } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    singIn(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 rounded-3xl shadow-xl p-8 space-y-8">
        <h2 className="text-4xl font-extrabold text-center text-white">
          Sign In
        </h2>
        <form onSubmit={handleSignIn} className="space-y-6">
          <div className="space-y-3">
            <label className="block text-gray-300 text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-6 py-4 bg-gray-800 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200 ease-in-out"
              required
            />
          </div>
          <div className="space-y-3">
            <label className="block text-gray-300 text-lg font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-6 py-4 bg-gray-800 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200 ease-in-out"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white text-lg font-semibold py-3 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Sign In
          </button>
        </form>
        <div className="flex w-full flex-col">
          <div className="divider">OR</div>
        </div>
        <SocialLogin />
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Don't have an account?{" "}
            <a href="/register" className="text-teal-500 hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
