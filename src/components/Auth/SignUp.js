import styles from "./SignUp.module.css";

const SignUp = (props) => {
  return (
    <div className={styles.signup}>
      <h1>Sign Up</h1>
      <form className={styles["signup-form"]}>
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
        <div className={styles["input-control"]}>
          <label />
          <input
            type="password"
            id="rpassword"
            placeholder="Repeat password"
            autoComplete="off"
          />
        </div>
        <button type="submit" className={styles.button}>
          Login to your account
        </button>
      </form>
      <p>
        Create an account
        <span onClick={props.onClick}>&nbsp; Login</span>
      </p>
    </div>
  );
};

export default SignUp;
