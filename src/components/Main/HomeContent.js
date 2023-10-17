import { useSelector, useDispatch } from "react-redux";
import { pageActions } from "../../store/page-slice";

import styles from "./HomeContent.module.css";

import iconMovies from "../../assets/icon-nav-movies.svg";
import iconTVSeries from "../../assets/icon-nav-tv-series.svg";

import { ReactComponent as IconEmptyBookMark } from "../../assets/icon-bookmark-empty.svg";
import { ReactComponent as IconFullBookMark } from "../../assets/icon-bookmark-full.svg";

const HomeContent = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.page.movies);
  const bookmarkState = useSelector((state) => state.page.bookmark);
  const searchState = useSelector((state) => state.search.searchFilter);

  const trendingData = state.filter((item) => item.thumbnail.trending);
  const allMoviesData = state.filter((item) => !item.thumbnail.trending);

  const trendingDataModifiedBySearch = searchState
    ? trendingData.filter((item) => item.title.includes(searchState))
    : trendingData;

  const allMoviesDataModifiedBySearch = searchState
    ? allMoviesData.filter((item) => item.title.includes(searchState))
    : allMoviesData;

  const bookmarkHandler = (item) => {
    dispatch(pageActions.toggleBookMark({ item }));
  };

  const trendingHelper = trendingDataModifiedBySearch.map((item) => {
    const isBookmarked = bookmarkState.find(
      (data) => data.title === item.title
    );

    return (
      <li>
        <div className={styles.liContainer}>
          <img
            src={require(`../../assets/thumbnails/${item.thumbnail.trending.large}`)}
            alt=""
          />
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
          <div className={styles.text}>
            <ul>
              <li>{item.year}</li>
              <li>
                <img
                  src={item.category === "Movie" ? iconMovies : iconTVSeries}
                  alt=""
                />
                {item.category}
              </li>
              <li>{item.rating}</li>
            </ul>

            <h1>{item.title}</h1>
          </div>
        </div>
      </li>
    );
  });

  const allMoviesHelper = allMoviesDataModifiedBySearch.map((item) => {
    const isBookmarked = bookmarkState.find(
      (data) => data.title === item.title
    );
    return (
      <li>
        <div className={styles.imageContainer}>
          <img
            src={require(`../../assets/thumbnails/${item.thumbnail.regular.large}`)}
            alt=""
          />
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
                src={item.category === "Movie" ? iconMovies : iconTVSeries}
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
    <div className={styles.home}>
      <section className={styles.trending}>
        <h1>Trending</h1>
        <ul>{trendingHelper}</ul>
      </section>
      <section className={styles.recommend}>
        <h1>Recommended for you</h1>
        <ul>{allMoviesHelper}</ul>
      </section>
    </div>
  );
};

export default HomeContent;
