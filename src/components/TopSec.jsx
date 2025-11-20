import React, { useState } from "react";
import mountain from "../assets/SVG/Asset 21.svg";
import tree from "../assets/SVG/Asset 3.svg";
import treebottomgrass from "../assets/SVG/treebottomgrass.svg"
import boat from "../assets/SVG/boat.svg"
import wood from "../assets/SVG/wood.svg"
import tiger from "../assets/SVG/tiger.svg"
import Elphe from "../assets/SVG/Elphe.svg"
import elphepaw from "../assets/SVG/elphepaw.svg"
import tigerpaw from "../assets/SVG/tigerpaw.svg"
import table from "../assets/SVG/table.svg"
import river from "../assets/SVG/river.svg"
import flowers from "../assets/SVG/flowers.svg"
import board from "../assets/SVG/board.svg"
import cave from "../assets/SVG/cave.svg"
import aboutUs from "../assets/SVG/aboutUs.png";

import styles from "./TopSec.module.css";
export default function TopSec() {
  const fullText = `
         To inspire growing young minds through engaging, value-driven stories that nurture empathy, curiosity, and positive character traits — building
  a generation of kind, confident, and socially responsible individuals.
      `;

  const words = fullText.trim().split(" ");
  const hasMore = words.length > 4;
  const shortText = words.slice(0, 20).join(" ");

  const [expanded, setExpanded] = useState(false)
  return (
    <div className={styles.topSection}>
      <div className={styles.treeContainer}>
        <img src={tree} alt="Tree" className={styles.tree} />

        <div className={styles.treeLinks}>
          <a href="/jingles" className={styles.jingles}>Jingles</a>
          <a href="/interactives" className={styles.interactive}>Interactives</a>
          <a href="/stories" className={styles.stories}>Stories</a>
        </div>
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
                  <path id="curve1" d="M 50 200 Q 500 10 950 200"/>
                </defs>
                <text className={styles.para1SVG}>
                  <textPath href="#curve1" startOffset="50%" text-anchor="middle">
                    Say Hi to our Cuties
                  </textPath>
                </text>
              </svg>
            </div>
            <div className={styles.caveText2}>
              <svg width="100%" height="250" viewBox="0 0 1000 300">
                <defs>
                  <path id="curve1" d="M 50 200 Q 500 10 950 200" />
                </defs>
                <text className={styles.para2SVG}>
                  <textPath href="#curve1" startOffset="50%" text-anchor="middle">
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
            <img src={tigerpaw} alt="tiger" className={styles.tigerPaw} />
          </div>

          <div className={styles.rightGroup}>
            <img src={table} alt="table" className={styles.table} />
            <img src={Elphe} alt="elphe" className={styles.elphe} />
            <img src={elphepaw} alt="elphepaw" className={styles.elphepaw} />
          </div>
        </div>
      </div>
      <div className={styles.aboutUsSection}>
        <div className={styles.aboutUsImageWrapper}>
          <img src={aboutUs} className={styles.aboutUsImage} />

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
    </div>
  )
}