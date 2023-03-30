import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import Auth from "../Authentication/Auth";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = UserAuth();

  const navigate = useNavigate();
  const HandleSubmit = async (e) => {
    setError("");
    try {
      await logIn(email, password);
      toast.success("Sucessfully loged In");
      navigate("/Home");
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    }
  };

  const signUpPage = () => {
    navigate("/SignUp");
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img
          className="homePageLogo"
          src="./code-sync.png"
          alt="code-sync-logo"
        />
        <h4 className="mainLabel">Sign in for Code sync</h4>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="USERNAME"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="inputBox"
            placeholder="PASSWORD"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={HandleSubmit} className="btn joinBtn">
            LOGIN
          </button>
          <div className="googleAuth">
            <span>OR</span>
          </div>
          <div className="authBtn">
            <Auth />
          </div>
          <span className="createInfo">
            If you don't have an account then create &nbsp;
            <span onClick={signUpPage} className="createNewBtn">
              new account
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
