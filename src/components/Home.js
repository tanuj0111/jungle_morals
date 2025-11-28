
import styles from "./css/JungleHero.module.css"

import Navbar from "./Navbar";

import Footer from "./Footer";
import TopSec from "./TopSec";
function Home() {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <TopSec />
      <Footer />
    </div>
  );
}

export default Home;
