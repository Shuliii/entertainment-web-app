import { useSelector } from "react-redux";

import Auth from "./components/Auth/Auth";
import Main from "./components/Main/Main";

import "./App.css";

function App() {
  const auth = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      {!auth && <Auth />}
      {auth && <Main />}
    </>
  );
}

export default App;
