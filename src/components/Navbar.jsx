import React from "react";
import styles from "./Navbar.module.css";
import Sun from "../assets/webp/sunlight.webp";
import junglemorals from "../assets/webp/Asset.webp";

import Sunlight from "../assets/webp/rays.webp";
import cloud1 from "../assets/webp/cloud1.webp";
import cloud2 from "../assets/webp/cloud2.webp";
import cloud3 from "../assets/webp/cloud4.webp";
import cloud4 from "../assets/webp/cloud1.webp";
import cloud5 from "../assets/webp/cloud5.webp";
import backgroundimg from "../assets/webp/backgroundAsset.webp";

function Navbar() {
  return (
    <div
      className="container-fluid position-relative  p-0"
      style={{
        height: "80vh",
        backgroundImage: `url(${backgroundimg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div style={{
        height: "300px",
      }} >
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25">
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.3) 35px, rgba(255,255,255,0.3) 70px)",
            }}
          ></div> 
        </div>
        <div
          className="position-absolute top-0 start-0"
          style={{ width: "200px", height: "200px", zIndex: 3 }}
        >
          <div className="position-relative w-100 h-100">

            <img
              src={Sunlight}
              alt="Sunlight"
              className={`${styles.sunLight}  object-fit-contain `}
            />
            <img
              src={Sun}
              alt="Sun"
              className={`${styles.sun} start-0 `}
            />

            <img
              src={junglemorals}
              alt="Jungle Morals"
              className={`object-fit-contain ${styles.jungleMorals}`}
            />
          </div>
        </div>

        <div className="position-relative h-100 d-flex align-items-center justify-content-end pe-5">
          <div
            className="position-relative"
            style={{ width: "600px", height: "300px", paddingRight: "100px" }}
          >
            <div className={`position-absolute z-3 ${styles.homeCloudOuter}`}>
              <div className={`position-relative ${styles.homeCloud}`}>
                <img src={cloud4} alt="cloud" className="position-absolute w-100 h-110 object-fit-contain" />
                <div className={`position-absolute w-100 h-100 d-flex align-items-center justify-content-center`}>
                  <span className={`${styles.homeCloudText}`} >
                    Home
                  </span>
                </div>
              </div>
            </div>

            <div className={`position-absolute  z-3 ${styles.theWhyCloudOuter}`}>
              <div className={`position-relative ${styles.theWhyCloud}`}>
                <img src={cloud2} alt="cloud" className="position-absolute w-100 h-120 object-fit-contain" />
                <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                  <span className={`${styles.theWhyCloudText}`} style={{ color: "#0f766e"}}>
                    The Why
                  </span>
                </div>
              </div>
            </div>

            <div className={`position-absolute  z-2 ${styles.whatCloudOuter}`}>
              <div className={`position-relative ${styles.whatCloud}`}>
                <img src={cloud1} alt="cloud" className="position-absolute w-100 h-110 object-fit-contain" />
                <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                  <span className={`${styles.whatCloudText}`} style={{ color: "#0f766e"}}>
                    What We Do
                  </span>
                </div>
              </div>
            </div>

            <div className={`position-absolute  z-2 ${styles.charactersCloudOuter}`}>
              <div className={`position-relative ${styles.charactersCloud}`}>
                <img src={cloud3} alt="cloud" className="position-absolute w-100 h-110 object-fit-contain" />
                <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                  <span className={`${styles.charactersCloudText}`} style={{ color: "#0f766e"}}>
                    Characters
                  </span>
                </div>
              </div>
            </div>


            <div className={`position-absolute  z-2 ${styles.emptyCloudOuter}`}>
              <div className={`position-relative ${styles.emptyCloud}`}>
                <img src={cloud5} alt="cloud" className="position-absolute w-100 h-100  object-fit-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

