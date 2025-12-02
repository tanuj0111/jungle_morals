
import styles from "./css/JungleHero.module.css"

import Navbar from "./Navbar";

import Footer from "./Footer";
// import TopSec from "./TopSec";
// import Whatwedo from "./whatwedo";
import Characters from "./Characters";
function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* <Navbar /> */}
      <Characters/>
      {/* <TopSec /> */}
      {/* ujjwal changes */}
      {/* <Whatwedo/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default Home;
