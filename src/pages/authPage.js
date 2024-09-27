import React, { useState } from "react";
import Login from "../components/login";
import Signup from "../components/signUp";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      {isLogin ? (
        <Login handleSwitch={handleSwitch} />
      ) : (
        <Signup handleSwitch={handleSwitch} />
      )}
    </div>
  );
};

export default AuthPage;
