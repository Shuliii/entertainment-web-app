import { useSelector, useDispatch } from "react-redux";
import { pageActions } from "../../store/page-slice";

import styles from "./Custom.module.css";

import iconMovies from "../../assets/icon-nav-movies.svg";
import iconTVSeries from "../../assets/icon-nav-tv-series.svg";
import { ReactComponent as IconEmptyBookMark } from "../../assets/icon-bookmark-empty.svg";
import { ReactComponent as IconFullBookMark } from "../../assets/icon-bookmark-full.svg";

const Custom = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.page.movies);
  const pageState = useSelector((state) => state.page.pageState);
  const bookmarkState = useSelector((state) => state.page.bookmark);
  const searchState = useSelector((state) => state.search.searchFilter);

  console.log(searchState);

  const bookmarkHandler = (item) => {
    dispatch(pageActions.toggleBookMark({ item }));
  };

  const stateModifiedBySearch = searchState
    ? state.filter((item) => item.title.includes(searchState))
    : state;

  const liHelper = stateModifiedBySearch.map((item) => {
    const isBookmarked = bookmarkState.find(
      (data) => data.title === item.title
    );
    return (
      <li>
        <div className={styles.imageContainer}>
          <img src={item.thumbnail.regular.large} alt="" />
          <div
            className={styles.bookmarkContainer}
            onClick={() => bookmarkHandler(item)}
          >
            {!isBookmarked ? (
              <IconEmptyBookMark className={styles.bookmarkImg} />
            ) : (
              <IconFullBookMark className={styles.bookmarkImg} />
            )}
          </div>
        </div>

        <div className={styles.descriptionContainer}>
          <ul>
            <li>{item.year}</li>
            <li>
              <img
                src={pageState === "Movie" ? iconMovies : iconTVSeries}
                alt=""
              />
              {item.category}
            </li>
            <li>{item.rating}</li>
          </ul>
        </div>

        <h2>{item.title}</h2>
      </li>
    );
  });

  return (
    <div className={styles.custom}>
      <h1>{pageState}</h1>
      <ul>{liHelper}</ul>
    </div>
  );
};

export default Custom;
