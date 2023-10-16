import Header from "./Header";
import MainContent from "./MainContent";

import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <Header />
      <MainContent />
    </main>
  );
};

export default Main;
