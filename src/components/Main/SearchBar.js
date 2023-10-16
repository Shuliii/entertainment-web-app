import styles from "./SearchBar.module.css";
import searchImg from "../../assets/icon-search.svg";

import { useSelector, useDispatch } from "react-redux";

import { searchActions } from "../../store/search-slice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.searchFilter);
  const state = useSelector((state) => state.page.pageState);

  const changeHandler = (e) => {
    dispatch(searchActions.change(e.target.value));
  };

  let placeholderHelper;

  switch (state) {
    case "home":
      placeholderHelper = "Search for movies or TV series";
      break;

    case "Movie":
      placeholderHelper = "Search for movies";
      break;
    case "TV Series":
      placeholderHelper = "Search for TV series";
      break;
    default:
      placeholderHelper = "Search for bookmarked shows";
      break;
  }
  return (
    <form className={styles.searchform}>
      <div className={styles["input-control"]}>
        <label />
        <input
          type="text"
          id="search"
          placeholder={placeholderHelper}
          autoComplete="off"
          onChange={changeHandler}
          value={search}
        />
        <img src={searchImg} alt="" />
      </div>
    </form>
  );
};

export default SearchBar;
