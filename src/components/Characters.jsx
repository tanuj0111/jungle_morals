import React from "react";
import styles from "./characters.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Tree1 from "../assets/Characters/2x/Asset 292-8.webp";
// import Tree2 from "../assets/Characters/2x/Asset 273@2x.webp";
// import MomekyBoard from "../assets/Characters/2x/monekyBoard.webp";
// import Board from "../assets/Characters/2x/board.webp";
// import Elephant from "../assets/Characters/2x/elephant.png";
import Animalbtn1 from "../assets/Characters/2x/Asset 245@2x.webp";
import Animalbtn2 from "../assets/Characters/2x/Asset 240@2x.webp";
import Animalbtn3 from "../assets/Characters/2x/Asset 247@2x.webp";
import Animalbtn4 from "../assets/Characters/2x/Asset 244@2x.webp";
import wall from "../assets/Characters/2x/wall.webp";
// import animalontree from "../assets/Characters/2x/animalontree.webp";
// import land from "../assets/Characters/2x/land.webp";
import river from "../assets/Characters/2x/river.webp"
import Lion from "../assets/Characters/2x/Lion.webp"
import Frog from "../assets/Characters/2x/frogf.webp"
import Boll from "../assets/Characters/2x/Boll.webp"
import meeting from "../assets/Characters/2x/meeting.webp"
import Elephant from "../assets/Characters/2x/elephantwithboard.webp"
import Party from "../assets/Characters/2x/party.webp"
import fox from "../assets/Characters/2x/foxx.webp"
import Deer from "../assets/Characters/2x/Deer.webp"
import Treewithland from "../assets/Characters/2x/treewithland.webp"
import Riveranimal1 from "../assets/Characters/2x/Asset 257@2x.webp"
import Riveranimal2 from "../assets/Characters/2x/Asset 234@2x.webp"
import Fish1 from "../assets/Characters/2x/Asset 256@2x.webp"
import Fish2 from "../assets/Characters/2x/Asset 255@2x.webp"
import Fish3 from "../assets/Characters/2x/Asset 254@2x.webp"
import monkeybtn1 from "../assets/Characters/2x/Asset 230@2x.webp"
import monkeybtn2 from "../assets/Characters/2x/Asset 231@2x.webp"
import Birdonboard from "../assets/Characters/2x/Asset 265@2x.webp"
import Birdbutton from "../assets/Characters/2x/Asset 220@2x.webp"
import Elephantbutton from "../assets/Characters/2x/Asset 248@2x.webp"
import Birdonwall from "../assets/Characters/2x/Asset 223@2x.webp"
import Wallanimalbtn1 from "../assets/Characters/2x/Asset 229@2x.webp"
import Wallanimalbtn2 from "../assets/Characters/2x/Asset 242@2x.webp"
import treeanimalbtn1 from "../assets/Characters/2x/Asset 243@2x.webp"
import treeanimalbtn2 from "../assets/Characters/2x/Asset 224@2x.webp"
import Frogbtn from "../assets/Characters/2x/Asset 241@2x.webp"
import Foxbtn from "../assets/Characters/2x/Asset 240@2x.webp"
import Deerbtn from "../assets/Characters/2x/Asset 239@2x.webp"
import lionbtn from "../assets/Characters/2x/Asset 238@2x.webp"
import Riverani1btn from "../assets/Characters/2x/Asset 237@2x.webp"
import Riverani2btn from "../assets/Characters/2x/Asset 235@2x.webp"
import Fishbtn from "../assets/Characters/2x/Asset 225@2x.webp"
import Partyani1 from "../assets/Characters/2x/Asset 226@2x.webp"
import Partyani2 from "../assets/Characters/2x/Asset 227@2x.webp"
import Partyani3 from "../assets/Characters/2x/Asset 236@2x.webp"
import Partyani4 from "../assets/Characters/2x/Asset 227@2x.webp"
import Stone from "../assets/Characters/2x/Asset 222@2x.webp"
import QueenBird from "../assets/Characters/2x/Asset 221@2x.webp"


function Characters() {

  return (
    <>
    <Navbar />

    <div className={styles.characters}>

      <div className={styles.sceneWrapper}> 

        {/* Trees */}
        <div className={styles.trees}>
          <img src={Tree1} className={styles.tree1} alt="Tree Left" />
          <div className={styles.monkeybutton}>

            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={monkeybtn1}
                alt="Logo"
                loading="lazy"

              />
            </a>

            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={monkeybtn2}
                alt="Logo"
                loading="lazy"

              />
            </a>
          </div>

        </div>

        {/* Monkey Board */}





        {/* Center Board */}
        <div className={styles.Board}>
          <img src={Elephant} alt="Board" />

          <div className={styles.Birdonboard}>
            <img src={Birdonboard} alt="Board" />
            <div className={styles.Boardbtn}>
              <a href=" " target="_blank" rel="noopener noreferrer">
                <img
                  src={Birdbutton}
                  alt="Logo"
                  loading="lazy"
                />
              </a>
            </div>

            <div className={styles.Elephantbtn}>
              <a href=" " target="_blank" rel="noopener noreferrer">
                <img
                  src={Elephantbutton}
                  alt="elephantbtn"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>



        {/* Animals */}
        <div className={styles.animals}>
          <img src={meeting} alt="" loading="lazy" srcset="" />

          <div className={styles.meetingbtn}>

            <div className={styles.animalbtn1}>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img
                  src={Animalbtn1}
                  alt="Logo"
                  loading="lazy"
                /> </a>
            </div>

            <div className={styles.animalbtn2}>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img
                  src={Animalbtn2}
                  alt="Logo"
                  loading="lazy"
                /> </a>
            </div>

            <div className={styles.animalbtn3}>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img
                  src={Animalbtn3}
                  alt="Logo"
                  loading="lazy"
                /> </a>
            </div>

            <div className={styles.animalbtn4}>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img
                  src={Animalbtn4}
                  alt="Logo"
                  loading="lazy"
                /> </a>
            </div>

          </div>
        </div>


        <div className={styles.wall_tree}>
          <div className={styles.wall}>
            <img src={wall} alt="Wall" loading="lazy" />

            <div className={styles.Birdonwall}>
              <img src={Birdonwall} alt="Board" loading="lazy" />

              <div className={styles.wallbtn}>
                <a href=" " target="_blank" rel="noopener noreferrer">
                  <img
                    src={Birdbutton}
                    alt="Logo"
                    loading="lazy"
                  />
                </a>
              </div>

              <div className={styles.Wallanimalbtn1}>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src={Wallanimalbtn1}
                    alt="Logo"
                    loading="lazy"
                  />
                </a>
              </div>

              <div className={styles.Wallanimalbtn2}>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src={Wallanimalbtn2}
                    alt="Logo"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>


          </div>

          <div className={styles.treeBlock}>
            <div className={styles.treewithanimal}>
              <img src={Treewithland} alt="Animal on Tree" loading="lazy" />

              <div className={styles.treeanimalbtn}>

                <div className={styles.treeanimalbtn2}>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <img
                      src={treeanimalbtn2}
                      alt="Logo"
                      loading="lazy"
                    /> </a>
                </div>

                <div className={styles.treeanimalbtn1}>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <img
                      src={treeanimalbtn1}
                      alt="Logo"
                      loading="lazy"
                    /> </a>
                </div>

              </div>
            </div>

          </div>
        </div>

        <section className={styles.riverSection}>
          <div className={styles.riverdiv}>
        
          <div className={styles.right}>

            <div className={styles.boll}>
              <img src={Boll} alt="" loading="lazy" />
            </div>


            <div className={styles.frog}>
              <img src={Frog} alt="" loading="lazy" />
              <div className={styles.frogbtn}>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src={Frogbtn}
                    alt="Logo"
                    loading="lazy"
                  /> </a>
              </div>
            </div>

            <div className={styles.fox}>
              <img src={fox} alt="" loading="lazy" />
              <div className={styles.foxbtn}>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src={Foxbtn}
                    alt="Logo"
                    loading="lazy"
                  /> </a>
              </div>
            </div>

            <div className={styles.Deer}>
              <img src={Deer} alt="" loading="lazy" />
              <div className={styles.Deerbtn}>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src={Deerbtn}
                    alt="Logo"
                    loading="lazy"
                  /> </a>
              </div>
            </div>
            <div className={styles.Birdonstone}>
              <img src={Stone} alt="" srcset="" loading="lazy" />
              <div className={styles.QueenBird}>
                <img src={QueenBird} alt="" srcset="" loading="lazy" />
              </div>

              <div className={styles.QueenBirdBtn}>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src={Birdbutton}
                    alt="Logo"
                    loading="lazy"
                  /> </a>
              </div>

            </div>


            <div className={styles.lion}>
              <img src={Lion} alt="" loading="lazy" />
              <div className={styles.Lionbtn}>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src={lionbtn}
                    alt="Logo"
                    loading="lazy"
                  /> </a>
              </div>
            </div>

            <div className={styles.party}>
              <img src={Party} alt="" loading="lazy" />

              <div className={styles.partyani1}>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src={Partyani1}
                    alt="Logo"
                    loading="lazy"
                  /> </a>
              </div>


              <div className={styles.partyani2}>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src={Partyani2}
                    alt="Logo"
                    loading="lazy"
                  /> </a>
              </div>


              <div className={styles.partyani3}>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src={Partyani3}
                    alt="Logo"
                    loading="lazy"
                  /> </a>
              </div>


              <div className={styles.partyani4}>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src={Partyani4}
                    alt="Logo"
                    loading="lazy"
                  /> </a>
              </div>

            </div>


          </div>

          <div className={styles.leftWrapper}>

            <div className={styles.riverContainer}>
              <img src={river} alt="River" loading="lazy" />
            </div>

            {/* Yeh sab river ke upar aayenge */}
            <div className={styles.riverObjects}>
              <div className={styles.riveranimal1}>
                <img src={Riveranimal1} loading="lazy" />

                <div className={styles.riveranibtn1}>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                      src={Riverani1btn}
                      alt="Logo"
                      loading="lazy"
                    /> </a>
                </div>

              </div>

              <div className={styles.riveranimal2}>
                <img src={Riveranimal2} loading="lazy" />
                <div className={styles.riveranimal2btn}>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={Riverani2btn} alt="" srcset="" loading="lazy" />
                  </a>

                </div>
              </div>
              <div className={styles.fish1}> <img src={Fish1} alt="" srcset="" /> </div>
              <div className={styles.fish2}>
                <img src={Fish2} alt="" srcset="" loading="lazy" />
                <div className={styles.fishbtn}>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <img
                      src={Fishbtn}
                      alt="Logo"
                      loading="lazy"
                    /> </a>
                </div>
              </div>
              <div className={styles.fish3}> <img src={Fish3} alt="" srcset="" loading="lazy" /> </div>



            </div>

          </div>

       </div>

        </section>









      </div>
    </div>
    <Footer />
    </>
  );
}

export default Characters;
