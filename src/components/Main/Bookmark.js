import { useSelector, useDispatch } from "react-redux";
import { pageActions } from "../../store/page-slice";

import styles from "./Bookmark.module.css";

import iconMovies from "../../assets/icon-nav-movies.svg";
import iconTVSeries from "../../assets/icon-nav-tv-series.svg";
import { ReactComponent as IconFullBookMark } from "../../assets/icon-bookmark-full.svg";

const Bookmark = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.page.bookmark);

  const searchState = useSelector((state) => state.search.searchFilter);

  const stateModifiedBySearch = searchState
    ? state.filter((item) => item.title.includes(searchState))
    : state;

  const movieState = stateModifiedBySearch.filter(
    (item) => item.category === "Movie"
  );
  const tvState = stateModifiedBySearch.filter(
    (item) => item.category === "TV Series"
  );

  const bookmarkHandler = (item) => {
    dispatch(pageActions.toggleBookMark({ item }));
  };

  const bookmarkedMoviesHelper =
    movieState.length === 0 ? (
      <p>No Videos available</p>
    ) : (
      <ul>
        {movieState.map((item) => (
          <li>
            <div className={styles.imageContainer}>
              <img src={item.thumbnail.regular.large} alt="" />
              <div
                className={styles.bookmarkContainer}
                onClick={() => bookmarkHandler(item)}
              >
                <IconFullBookMark className={styles.bookmarkImg} />
              </div>
            </div>

            <div className={styles.descriptionContainer}>
              <ul>
                <li>{item.year}</li>
                <li>
                  <img src={iconMovies} alt="" />
                  {item.category}
                </li>
                <li>{item.rating}</li>
              </ul>
            </div>

            <h2>{item.title}</h2>
          </li>
        ))}
      </ul>
    );

  const bookmarkedTVHelper =
    tvState.length === 0 ? (
      <p>No Videos available</p>
    ) : (
      <ul>
        {tvState.map((item) => (
          <li>
            <div className={styles.imageContainer}>
              <img src={item.thumbnail.regular.large} alt="" />
              <div
                className={styles.bookmarkContainer}
                onClick={() => bookmarkHandler(item)}
              >
                <IconFullBookMark className={styles.bookmarkImg} />
              </div>
            </div>

            <div className={styles.descriptionContainer}>
              <ul>
                <li>{item.year}</li>
                <li>
                  <img src={iconTVSeries} alt="" />
                  {item.category}
                </li>
                <li>{item.rating}</li>
              </ul>
            </div>

            <h2>{item.title}</h2>
          </li>
        ))}
      </ul>
    );
  return (
    <div className={styles.bookmark}>
      <section className={styles.bookmarkMovies}>
        <h1>Bookmarked Movies</h1>
        {bookmarkedMoviesHelper}
      </section>
      <section className={styles.bookmarkTV}>
        <h1>Bookmarked TV Series</h1>
        {bookmarkedTVHelper}
      </section>
    </div>
  );
};

export default Bookmark;
