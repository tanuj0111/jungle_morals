import React, { useState, useEffect } from "react";
import styles from "./characters.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Tree1 from "../assets/Characters/2x/Asset 292-8.webp";
// import Tree2 from "../assets/Characters/2x/Asset 273@2x.webp";
// import MomekyBoard from "../assets/Characters/2x/monekyBoard.webp";
// import Board from "../assets/Characters/2x/board.webp";
// import Elephant from "../assets/Characters/2x/elephant.png";
import Animalbtn1 from "../assets/Characters/2x/Asset 245@2x.webp";
import tigru from "../assets/CharacterPage/2x/tigru.png"
import Animalbtn2 from "../assets/Characters/2x/Asset 240@2x.webp";
import puppydoo from "../assets/CharacterPage/2x/puppydoo.png"
import Animalbtn3 from "../assets/Characters/2x/Asset 247@2x.webp";
import eleboo from "../assets/CharacterPage/2x/eleboo.png"
import Animalbtn4 from "../assets/Characters/2x/Asset 244@2x.webp";
import turtloo from "../assets/CharacterPage/2x/turtloo.png"
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
import monkeyboard from "../assets/CharacterPage/2x/monkeyboard.png"
import Birdonboard from "../assets/Characters/2x/Asset 265@2x.webp"
import Birdbutton from "../assets/Characters/2x/Asset 220@2x.webp"
import spoo from "../assets/CharacterPage/2x/spoo.png"
import Elephantbutton from "../assets/Characters/2x/Asset 248@2x.webp"
import elephiphi from "../assets/CharacterPage/2x/elephiphi.png"
import Birdonwall from "../assets/Characters/2x/Asset 223@2x.webp"
import broop from "../assets/CharacterPage/2x/broop.png"
import Wallanimalbtn1 from "../assets/Characters/2x/Asset 229@2x.webp"
import jackie from "../assets/CharacterPage/2x/jackie.png"
import Wallanimalbtn2 from "../assets/Characters/2x/Asset 242@2x.webp"
import wolfie from "../assets/CharacterPage/2x/wolfie.png"
import treeanimalbtn1 from "../assets/Characters/2x/Asset 243@2x.webp"
import moocow from "../assets/CharacterPage/2x/moocow.png"
import treeanimalbtn2 from "../assets/Characters/2x/Asset 224@2x.webp"
import kaoloo from "../assets/CharacterPage/2x/koaloo.png"
import Frogbtn from "../assets/Characters/2x/Asset 241@2x.webp"
import turtlee from "../assets/CharacterPage/2x/turtlee.png"
import Foxbtn from "../assets/Characters/2x/Asset 240@2x.webp"
import dogu from "../assets/CharacterPage/2x/dogu.png"
import Deerbtn from "../assets/Characters/2x/Asset 239@2x.webp"
import loopy from "../assets/CharacterPage/2x/loopy.png"
import lionbtn from "../assets/Characters/2x/Asset 238@2x.webp"
import lionus from "../assets/CharacterPage/2x/lionus.png"
import Riverani1btn from "../assets/Characters/2x/Asset 237@2x.webp"
import crocodo from "../assets/CharacterPage/2x/crocodo.png"
import Riverani2btn from "../assets/Characters/2x/Asset 235@2x.webp"
import hippopopo from "../assets/CharacterPage/2x/hippopopo.png"
import Fishbtn from "../assets/Characters/2x/Asset 225@2x.webp"
import fishboard from "../assets/CharacterPage/2x/fishboard.png"
import Partyani1 from "../assets/Characters/2x/Asset 226@2x.webp"
import rababy from "../assets/CharacterPage/2x/rababy.png"
import Partyani2 from "../assets/Characters/2x/Asset 227@2x.webp"
import rabbitu from "../assets/CharacterPage/2x/rabbitu.png"
import Partyani3 from "../assets/Characters/2x/Asset 236@2x.webp"
import sheepoo from "../assets/CharacterPage/2x/sheepoo.png"
import Partyani4 from "../assets/Characters/2x/Asset 227@2x.webp"
import motherrabbit from "../assets/CharacterPage/2x/motherrabbit.png"
import Stone from "../assets/Characters/2x/Asset 222@2x.webp"
import QueenBird from "../assets/Characters/2x/Asset 221@2x.webp"
import querow from "../assets/CharacterPage/2x/querow.png"


function Characters() {
  const [boardOpen, setBoardOpen] = useState(false);
  const [boardImg, setBoardImg] = useState(null);

  const openBoard = (img) => { setBoardImg(img); setBoardOpen(true); };
  const closeBoard = () => { setBoardOpen(false); setBoardImg(null); };

  useEffect(() => {
    if (!boardOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') closeBoard(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [boardOpen]);

  return (
    <>
      <Navbar />

      <div className={styles.characters}>

        <div className={styles.sceneWrapper}>

          {/* Trees */}
          <div className={styles.trees}>
            <img src={Tree1} className={styles.tree1} alt="Tree Left" />
            <div className={styles.monkeybutton}>

              <img
                src={monkeybtn1}
                alt="monkey button 1"
                role="button"
                tabIndex={0}
                onClick={() => openBoard(monkeyboard)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(monkeyboard); }}
              />

              <img
                src={monkeybtn2}
                alt="monkey button 2"
                role="button"
                tabIndex={0}
                onClick={() => openBoard(monkeyboard)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(monkeyboard); }}
              />

            </div>

          </div>

          {/* Monkey Board */}





          {/* Center Board */}
          <div className={styles.Board}>
            <img src={Elephant} alt="Board" />

            <div className={styles.Birdonboard}>
              <img src={Birdonboard} alt="Board" />
              <div className={styles.Boardbtn}>

                <img
                  src={Birdbutton}
                  alt="birdbutton"
                  role="button"
                  tabIndex={0}
                  onClick={() => openBoard(spoo)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(spoo) }}
                />
              </div>

              <div className={styles.Elephantbtn}>
                <img
                  src={Elephantbutton}
                  alt="elephantbtn"
                  role="button"
                  tabIndex={0}
                  onClick={() => openBoard(elephiphi)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(elephiphi) }}

                />
              </div>
            </div>
          </div>



          {/* Animals */}
          <div className={styles.animals}>
            <img src={meeting} alt="" srcset="" />

            <div className={styles.meetingbtn}>

              <div className={styles.animalbtn1}>
                <img
                  src={Animalbtn1}
                  alt="tigrubtn"
                  role="button"
                  tabIndex={0}
                  onClick={() => openBoard(tigru)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(tigru) }}

                />
              </div>

              <div className={styles.animalbtn2}>
                <img
                  src={Animalbtn2}
                  alt="puppydoobtn"
                  role="button"
                  tabIndex={0}
                  onClick={() => openBoard(puppydoo)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(puppydoo) }}
                />
              </div>

              <div className={styles.animalbtn3}>
                <img
                  src={Animalbtn3}
                  alt="eleboobtn"
                  role="button"
                  tabIndex={0}
                  onClick={() => openBoard(eleboo)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(eleboo) }}

                />
              </div>

              <div className={styles.animalbtn4}>
                <img
                  src={Animalbtn4}
                  alt="turtloobtn"
                  role="button"
                  tabIndex={0}
                  onClick={() => openBoard(turtloo)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(turtloo) }}

                />
              </div>

            </div>
          </div>


          <div className={styles.wall_tree}>
            <div className={styles.wall}>
              <img src={wall} alt="Wall" />

              <div className={styles.Birdonwall}>
                <img src={Birdonwall} alt="Board" />

                <div className={styles.wallbtn}>
                  <img
                    src={Birdbutton}
                    alt="broopbtn"
                    role="button"
                    tabIndex={0}
                    onClick={() => openBoard(broop)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(broop) }}

                  />
                </div>

                <div className={styles.Wallanimalbtn1}>
                  <img
                    src={Wallanimalbtn1}
                    alt="jackiebtn"
                    role="button"
                    tabIndex={0}
                    onClick={() => openBoard(jackie)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(jackie) }}

                  />
                </div>

                <div className={styles.Wallanimalbtn2}>
                  <img
                    src={Wallanimalbtn2}
                    alt="wolfiebtn"
                    role="button"
                    tabIndex={0}
                    onClick={() => openBoard(wolfie)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(wolfie) }}

                  />
                </div>
              </div>


            </div>

            <div className={styles.treeBlock}>
              <div className={styles.treewithanimal}>
                <img src={Treewithland} alt="Animal on Tree" />

                <div className={styles.treeanimalbtn}>

                  <div className={styles.treeanimalbtn2}>
                    <img
                      src={treeanimalbtn2}
                      alt="koaloobtn"
                      role="button"
                      tabIndex={0}
                      onClick={() => openBoard(kaoloo)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(kaoloo) }}

                    />
                  </div>

                  <div className={styles.treeanimalbtn1}>
                    <img
                      src={treeanimalbtn1}
                      alt="moocowbtn"
                      role="button"
                      tabIndex={0}
                      onClick={() => openBoard(moocow)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(moocow) }}

                    />
                  </div>

                </div>
              </div>

            </div>
          </div>

          <section className={styles.riverSection}>
            <div className={styles.riverdiv}>

              <div className={styles.right}>

                <div className={styles.boll}>
                  <img src={Boll} alt="" />
                </div>


                <div className={styles.frog}>
                  <img src={Frog} alt="" />
                  <div className={styles.frogbtn}>

                    <img
                      src={Frogbtn}
                      alt="Logo"
                      role="button"
                      tabIndex={0}
                      onClick={() => openBoard(turtlee)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(turtlee) }}

                    />
                  </div>
                </div>

                <div className={styles.fox}>
                  <img src={fox} alt="" />
                  <div className={styles.foxbtn}>

                    <img
                      src={Foxbtn}
                      alt="dogubtn"
                      role="button"
                      tabIndex={0}
                      onClick={() => openBoard(dogu)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(dogu) }}

                    />
                  </div>
                </div>

                <div className={styles.Deer}>
                  <img src={Deer} alt="" />
                  <div className={styles.Deerbtn}>

                    <img
                      src={Deerbtn}
                      alt="loppybtn"
                      role="button"
                      tabIndex={0}
                      onClick={() => openBoard(loopy)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(loopy) }}

                    />
                  </div>
                </div>
                <div className={styles.Birdonstone}>
                  <img src={Stone} alt="" srcset="" />
                  <div className={styles.QueenBird}>
                    <img src={QueenBird} alt="" srcset="" />
                  </div>

                  <div className={styles.QueenBirdBtn}>

                    <img
                      src={Birdbutton}
                      alt="querowbtn"
                      role="button"
                      tabIndex={0}
                      onClick={() => openBoard(querow)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(querow) }}


                    />
                  </div>

                </div>


                <div className={styles.lion}>
                  <img src={Lion} alt="" />
                  <div className={styles.Lionbtn}>

                    <img
                      src={lionbtn}
                      alt="lionusbtn"
                      role="button"
                      tabIndex={0}
                      onClick={() => openBoard(lionus)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(lionus) }}

                    />
                  </div>
                </div>

                <div className={styles.party}>
                  <img src={Party} alt="" />

                  <div className={styles.partyani1}>

                    <img
                      src={Partyani1}
                      alt="rababtbtn"
                      role="button"
                  tabIndex={0}
                  onClick={() => openBoard(rababy)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(rababy) }}

                    />
                  </div>


                  <div className={styles.partyani2}>

                    <img
                      src={Partyani2}
                      alt="rabitubtn"
                      role="button"
                  tabIndex={0}
                  onClick={() => openBoard(rabbitu)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(rabbitu) }}

                    />
                  </div>


                  <div className={styles.partyani3}>

                    <img
                      src={Partyani3}
                      alt="sheepoobtn"
                      role="button"
                  tabIndex={0}
                  onClick={() => openBoard(sheepoo)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(sheepoo) }}

                      
                    />
                  </div>


                  <div className={styles.partyani4}>

                    <img
                      src={Partyani4}
                      alt="motherrabitbtn"
                      role="button"
                  tabIndex={0}
                  onClick={() => openBoard(motherrabbit)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(motherrabbit) }}

                    />
                  </div>

                </div>


              </div>

              <div className={styles.leftWrapper}>

                <div className={styles.riverContainer}>
                  <img src={river} alt="River" />
                </div>

                {/* Yeh sab river ke upar aayenge */}
                <div className={styles.riverObjects}>
                  <div className={styles.riveranimal1}>
                    <img src={Riveranimal1} />

                    <div className={styles.riveranibtn1}>

                      <img
                        src={Riverani1btn}
                        alt="crocodobtn"
                        role="button"
                        tabIndex={0}
                        onClick={() => openBoard(crocodo)}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(crocodo) }}

                      />
                    </div>

                  </div>

                  <div className={styles.riveranimal2}>
                    <img src={Riveranimal2} />
                    <div className={styles.riveranimal2btn}>

                      <img src={Riverani2btn}
                        alt="hoppopopobtn"
                        role="button"
                        tabIndex={0}
                        onClick={() => openBoard(hippopopo)}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(hippopopo) }}

                      />

                    </div>
                  </div>
                  <div className={styles.fish1}>
                    <img src={Fish1} alt="" srcset="" /> </div>
                  <div className={styles.fish2}>
                    <img src={Fish2} alt="" srcset="" />
                    <div className={styles.fishbtn}>

                      <img
                        src={Fishbtn}
                        alt="fishboardbtn"
                        role="button"
                        tabIndex={0}
                        onClick={() => openBoard(fishboard)}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openBoard(fishboard) }}
                      />
                    </div>
                  </div>
                  <div className={styles.fish3}> <img src={Fish3} alt="" srcset="" /> </div>



                </div>

              </div>

            </div>

          </section>

        </div>
      </div>
      {boardOpen && (
        <>
          <div className={styles.backdropLayer} onClick={closeBoard} />
          <div className={styles.centerModal} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            {boardImg && <img src={boardImg} alt="Monkey Board" className={styles.centerImg} />}
          </div>
        </>
      )}
      <Footer />
    </>
  );
}

export default Characters;
