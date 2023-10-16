import { useSelector } from "react-redux";

import SearchBar from "./SearchBar";
import HomeContent from "./HomeContent";
import Custom from "./Custom";
import Bookmark from "./Bookmark";

import styles from "./MainContent.module.css";

const MainContent = () => {
  const state = useSelector((state) => state.page.pageState);

  return (
    <div className={styles.maincontent}>
      <SearchBar />
      {state === "home" && <HomeContent />}
      {state === "Movie" && <Custom />}
      {state === "TV Series" && <Custom />}
      {state === "bookmark" && <Bookmark />}
    </div>
  );
};

export default MainContent;
