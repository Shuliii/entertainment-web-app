import { useDispatch } from "react-redux";

import { authActions } from "../../store/auth-slice";

import styles from "./Login.module.css";

const Login = (props) => {
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.toggle());
  };

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <form className={styles["login-form"]} onSubmit={submitHandler}>
        <div className={styles["input-control"]}>
          <label />
          <input
            type="text"
            id="email"
            placeholder="Email address"
            autoComplete="off"
          />
        </div>
        <div className={styles["input-control"]}>
          <label />
          <input
            type="password"
            id="password"
            placeholder="Password"
            autoComplete="off"
          />
        </div>
        <button type="submit" className={styles.button}>
          Login to your account
        </button>
      </form>
      <p>
        Don't have an account?
        <span onClick={props.onClick}>&nbsp; Sign Up</span>
      </p>
    </div>
  );
};

export default Login;
