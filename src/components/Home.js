import styles from "./css/JungleHero.module.css"
import Characters from "./Characters";
function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* <Navbar /> */}
      {/* <TopSec /> */}
      {/* <Footer /> */}
           <Characters/>
    </div>
  );
}

export default Home;
