import { async } from "@firebase/util";
import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";

const Auth = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/Home");
    }
  }, [user]);

  return (
    <div>
      <div className="max-w-[240px] m-auto py-4">
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default Auth;
