import React from "react";
import Auth from "../Authentication/Auth";

const Login = () => {
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img
          className="homePageLogo"
          src="./code-sync.png"
          alt="code-sync-logo"
        />
        <h4 className="mainLabel">Sign in for Code sync</h4>
        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="USERNAME" />
          <input type="text" className="inputBox" placeholder="PASSWORD" />
          <button className="btn joinBtn">LOGIN</button>
          <div className="googleAuth">
            <span>OR</span>
          </div>
          <div className="authBtn">
            <Auth />
          </div>
          <span className="createInfo">
            If you don't have an account then create &nbsp;
            <a href="" className="createNewBtn">
              new account
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
