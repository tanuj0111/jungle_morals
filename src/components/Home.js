
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
      {/* <div className={styles.topSection}>
        <div className={styles.treeContainer}>
          <img src={tree} alt="Tree" className={styles.tree} />
          <img src={treebottomgrass} alt="treebottomgrass" className={styles.treebottomgrass} />
        </div>
        <div className={styles.mountainContainer}>
          <img src={mountain} alt="Mountain" className={styles.mountain} />
          <div className={styles.boardContainer}>
            <img src={board} alt="board" className={styles.board} />
            <div className={styles.boardText}>
              <p>For Kids' Joy, and Parents' Peace of Mind</p>
            </div>
          </div>
        </div>




        <div className={`${styles.grassContainer} container-fluid `}>

          <div className={styles.riverContainer}>
            <img src={river} alt="River" className={styles.river} />
            <div className={styles.boatWrapper}>
              <img src={boat} alt="Boat" className={styles.boat} />

              <button className={styles.boatBtn}>
                Click Me
              </button>
            </div>
          </div>




          <div className={styles.flowerCaveSection}>
            <img src={flowers} alt="flowers" className={styles.flowers} />

            <div className={styles.caveContainer}>
              <img src={cave} alt="cave" className={styles.cave} />
              <div className={styles.caveText}>

                <svg width="100%" height="250" viewBox="0 0 1000 300">
                  <defs>
                    <path id="curve1" d="M 50 200 Q 500 10 950 200" />
                  </defs>
                  <text className={styles.para1SVG}>
                    <textPath href="#curve1" startOffset="50%" text-anchor="middle">
                      Say Hi to our Cuties
                    </textPath>
                  </text>
                </svg>

                <svg width="100%" height="250" viewBox="0 0 1000 300">
                  <defs>
                    <path id="curve2" d="M 100 220 Q 500 120 900 220" />
                  </defs>

                  <text className={styles.para2SVG}>
                    <textPath href="#curve2" startOffset="50%" text-anchor="middle">
                      Click the Paws!
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.charactersContainer}>
            <div className={styles.leftGroup}>
              <img src={wood} alt="wood" className={styles.wood} />
              <img src={tiger} alt="tiger" className={styles.tiger} />
              <img src={tigerpaw} alt="tiger" className={styles.tigerPaw} />
            </div>

            <div className={styles.rightGroup}>
              <img src={table} alt="table" className={styles.table} />
              <img src={Elphe} alt="elphe" className={styles.elphe} />
              <img src={elphepaw} alt="tiger" className={styles.elphepaw} />
            </div>
          </div>


        </div>
      </div> */}
      
    </div>
  );
}

export default Home;
