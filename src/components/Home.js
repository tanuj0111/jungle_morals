
import styles from "./css/JungleHero.module.css"

import Navbar from "./Navbar";

import Footer from "./Footer";
import TopSec from "./TopSec";
import Whatwedo from "./whatwedo";
function Home() {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      {/* <TopSec /> */}
      <Whatwedo/>
      <Footer/>
    </div>
  );
}

export default Home;
