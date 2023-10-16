import { useState } from "react";

import Login from "./Login";
import SignUp from "./SignUp";

import styles from "./Auth.module.css";

import logo from "../../assets/logo.svg";

const Auth = () => {
  const [pageState, setPageState] = useState("login");

  const changeToSignUp = () => {
    setPageState("signup");
  };

  const changeToLogin = () => {
    setPageState("login");
  };

  return (
    <div className={styles.auth}>
      <img src={logo} alt="logo" />
      {pageState === "login" && <Login onClick={changeToSignUp} />}
      {pageState === "signup" && <SignUp onClick={changeToLogin} />}
    </div>
  );
};

export default Auth;
