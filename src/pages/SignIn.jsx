import React, { useContext } from "react";
import AuthContext from "../context/authcontext/AuthContext";

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
      .then((error) => console.log(error));
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content ">
          <div className="card bg-base-100 w-full max-w-5xl shrink-0 shadow-2xl">
            <form onSubmit={handleSignIn}>
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="fieldset-label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                  />
                  <label className="fieldset-label">Password</label>
                  <input
                    type="password"
                    className="input"
                    name="password"
                    placeholder="Password"
                  />

                  <button className="btn btn-neutral mt-4" type="submit">
                    Sign In
                  </button>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
