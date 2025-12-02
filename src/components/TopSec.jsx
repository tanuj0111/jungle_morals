import React, { useEffect, useState } from "react";
import styles from "./TopSec.module.css";
import mountain from "../assets/webp/mountain.webp";
import tree from "../assets/webp/tree.webp";
import treebottomgrass from "../assets/webp/treebottomgrass.webp";
import boat from "../assets/SVG/boat.svg"
import wood from "../assets/webp/throne.webp"
import tiger from "../assets/webp/lion.webp"
import lionboard from '../assets/webp/lionboard.png'
import Elphe from "../assets/webp/elephant.webp"
import elphepaw from "../assets/webp/elepaw.webp"
import elephantbaord from '../assets/webp/elephantboard.png'
import tigerpaw from "../assets/webp/lionpaw.webp"
import table from "../assets/webp/table.webp"
import river from "../assets/webp/river.webp"
import flowers from "../assets/webp/flower.webp"
import board from "../assets/webp/board.webp"
import cave from "../assets/webp/cave1.webp"
import aboutUs from "../assets/webp/aboutUs.webp";
import patchright from "../assets/webp/patch_right.webp";
import patchleft from "../assets/webp/patch_left.webp";
import Navbar from "./Navbar";
import Footer from "./Footer";
 
export default function TopSec() {
  const fullText = `
         To inspire growing young minds through engaging, value-driven stories that nurture empathy, curiosity, and positive character traits — building
  a generation of kind, confident, and socially responsible individuals.
      `;

  const words = fullText.trim().split(" ");
  const hasMore = words.length > 4;
  const shortText = words.slice(0, 20).join(" ");

  const [expanded, setExpanded] = useState(false)
  const [lionOpen, setLionOpen] = useState(false)
  const [eleOpen, setEleOpen] = useState(false)

  const openLion = () => { setEleOpen(false); setLionOpen(true) }
  const closeLion = () => setLionOpen(false)
  const openEle = () => { setLionOpen(false); setEleOpen(true) }
  const closeEle = () => setEleOpen(false)

  // ESC key handler for either modal
  useEffect(() => {
    if (!lionOpen && !eleOpen) return
    const onKey = (e) => { if (e.key === 'Escape') { closeLion(); closeEle(); } }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lionOpen, eleOpen])
  return (
    <>
    <Navbar />
    <div className={styles.topSection}>
      <div className={styles.treeContainer}>
        <img src={tree} alt="Tree" className={styles.tree} />

        <div className={styles.treeLinks}>
          <a href="/jingles" className={styles.jingles}>Jingles</a>
          <a href="/interactives" style={{ fontSize: '2rem' }} className={styles.interactive}>Interactives</a>
          <a href="/stories" className={styles.stories}>Stories</a>
        </div>
        <img src={treebottomgrass} alt="treebottomgrass" className={styles.treebottomgrass} />
      </div>

      <div className={styles.mountainContainer}>
        <img src={mountain} alt="Mountain" className={styles.mountain} />
        <div className={styles.boardContainer}>
          <img src={board} alt="board" className={styles.board} />
          <div className={styles.boardText}>
            <p>For Kids' Joy and Parents' Peace of Mind</p>
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
          <img src={flowers} alt="flower" className={styles.flowers} />
          <img src={patchleft} alt="patch" className={styles.patchleft} />
          <img src={patchright} alt="patch" className={styles.patchright} />

          <div className={styles.caveContainer}>
            <img src={cave} alt="cave" className={styles.cave} />
            <div className={styles.caveText}>

              <svg width="100%" height="250" viewBox="0 0 1000 300">
                <defs>
                  <path id="curve1" d="M 50 350 Q 500 -100 950 350" />
                </defs>
                <text className={styles.para1SVG}>
                  <textPath href="#curve1" startOffset="50%" textAnchor="middle">
                    Say Hi to our Cuties
                  </textPath>
                </text>
              </svg>
            </div>
            <div className={styles.caveText2}>
              <svg width="100%" height="250" viewBox="0 0 1000 300">
                <defs>
                  <path id="curve2" d="M 70 420 Q 500 -165 950 400" />
                </defs>
                <text className={styles.para2SVG}>
                  <textPath href="#curve2" startOffset="50%" text-anchor="middle">
                    Click The Paws!
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
            <img
              src={tigerpaw}
              alt="tiger paw"
              className={styles.tigerPaw}
              role="button"
              tabIndex={0}
              onClick={openLion}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLion() }}
            />
          </div>

          <div className={styles.rightGroup}>
            <img src={table} alt="table" className={styles.table} />
            <img src={Elphe} alt="elphe" className={styles.elphe} />
            <img
              src={elphepaw}
              alt="elephant paw"
              className={styles.elphepaw}
              role="button"
              tabIndex={0}
              onClick={openEle}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openEle() }}
            />
          </div>
        </div>
      </div>
      <div className={styles.aboutUsSection}>
        <div className={styles.aboutUsImageWrapper}>
          <img src={aboutUs} alt="aboutusimage" className={styles.aboutUsImage} />

          <div className={styles.aboutUsContent}>
            <h2>About Us</h2>

            <p className={styles.aboutText}>
              {expanded ? fullText : shortText}
              {!expanded && hasMore && "..."}
            </p>

            {hasMore && (
              <span
                className={styles.readMore}
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Read Less" : "Read More"}
              </span>
            )}
          </div>
        </div>
      </div>
      {(lionOpen || eleOpen) && (
        <>
          <div className={styles.backdropLayer} onClick={() => { closeLion(); closeEle(); }} />
          <div className={styles.centerModal} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            {lionOpen && <img src={lionboard} alt="Liona intro" className={styles.centerImg} />}
            {eleOpen && <img src={elephantbaord} alt="Elephiphi intro" className={styles.centerImg} />}
          </div>
        </>
      )}
    </div>
    <Footer />
    </>
  )
}