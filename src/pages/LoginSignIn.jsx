import React from "react";
import "./LoingSignIn.css";
import Download from "../assets/Download.png";

export const LoginSignIn = () => {
  return (
    <div className="login-signUp-section">
      <div className="Login-signUp-container">
        <h1>Sign up</h1>
        <div className="signUp-conatiner">
          <input type="text" name="" placeholder="Your Name..." id="" />
          <input type="email" name="" placeholder="Your Email..." id="" />
          <input
            type="password"
            name=""
            placeholder="Enter Password..."
            id=""
          />
          <button className="button">Continue</button>
        </div>
        <div className="login-container">
          <p>
            Already have an account? <span>Login here</span>
          </p>
          <div className="Login-agree">
            <input type="checkbox" name="" id="" />
            <p>
              By continuing you agree to the term of use and privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
