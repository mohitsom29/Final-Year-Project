import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../../Context/AuthContext";
import { Alert } from "react-bootstrap";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = UserAuth();

  const navigate = useNavigate();
  const HandleSignUp = async () => {
    setError("");
    try {
      await signUp(email, password);
      toast.success("Sucessfully Signed Up");
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    }
  };

  const loginPage = () => {
    navigate("/");
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img
          className="homePageLogo"
          src="./code-sync.png"
          alt="code-sync-logo"
        />
        <h4 className="mainLabel">Sign up for Code sync</h4>
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
          <button onClick={HandleSignUp} className="btn joinBtn">
            Sign Up
          </button>
          <span className="createInfo">
            If you already have an account then &nbsp;
            <span onClick={loginPage} className="createNewBtn">
              Login
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
