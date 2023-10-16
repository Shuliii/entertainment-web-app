import { useSelector, useDispatch } from "react-redux";
import { pageActions } from "../../store/page-slice";
import { searchActions } from "../../store/search-slice";

import styles from "./Header.module.css";

//images
import { ReactComponent as Logo } from "../../assets/logo.svg";
import avatar from "../../assets/image-avatar.png";
import { ReactComponent as Home } from "../../assets/icon-nav-home.svg";
import { ReactComponent as Movies } from "../../assets/icon-nav-movies.svg";
import { ReactComponent as Tvseries } from "../../assets/icon-nav-tv-series.svg";
import { ReactComponent as Bookmark } from "../../assets/icon-nav-bookmark.svg";

const Header = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.page.pageState);

  const clickHandler = (param) => {
    dispatch(searchActions.change(""));
    dispatch(pageActions.change({ param }));
  };

  return (
    <header className={styles.header}>
      <div>
        <Logo onClick={() => clickHandler("home")} />
      </div>
      <nav>
        <ul>
          <li>
            <button className={styles.button}>
              <Home
                className={state === "home" && styles.active}
                onClick={() => clickHandler("home")}
              />
            </button>
          </li>
          <li>
            <button className={styles.button}>
              <Movies
                className={state === "movies" && styles.active}
                onClick={() => clickHandler("Movie")}
              />
            </button>
          </li>
          <li>
            <button className={styles.button}>
              <Tvseries
                className={state === "tvseries" && styles.active}
                onClick={() => clickHandler("TV Series")}
              />
            </button>
          </li>
          <li>
            <button className={styles.button}>
              <Bookmark
                className={state === "bookmark" && styles.active}
                onClick={() => clickHandler("bookmark")}
              />
            </button>
          </li>
        </ul>
      </nav>
      <div className={styles.avatar}>
        <img src={avatar} alt="" />
      </div>
    </header>
  );
};

export default Header;
