import React from "react";
import Navbar from "./Navbar";
import styles from "./AboutUs.module.css";

import paper from "../assets/Light aboutus_img/Asset 17.webp";
import rock from "../assets/Light aboutus_img/Asset 16.webp";
import tboard from "../assets/Light aboutus_img/Asset 14.webp";
import pillar1 from "../assets/Light aboutus_img/Asset 21.webp";
import pillar2 from "../assets/Light aboutus_img/Asset 20.webp";
import pillar3 from "../assets/Light aboutus_img/Asset 18.webp";
import small_rock from "../assets/Light aboutus_img/Asset 19.webp";
import big_rock from "../assets/Light aboutus_img/Asset 15.webp";
import l_grass from "../assets/Light aboutus_img/Asset 12.webp";
import r_grass from "../assets/Light aboutus_img/Asset 13.webp";
import intro from "../assets/Light aboutus_img/Intro.mp4";
import side from "../assets/Light aboutus_img/Asset 24.webp";
import frame from "../assets/Light aboutus_img/Asset 22.webp";
// import grass from "../assets/Light aboutus_img/Asset +25.webp";

// import Footer from "./Footer";

function AboutUs() {
    return (
        <>
            <Navbar />


            <div className={styles.aboutpage}>

                <div className={styles.firstsec}>

                    <div className={styles.frame}>
                        <img src={r_grass} alt="" srcset="" className={styles.rightgrass} />
                        <img src={frame} alt="" srcset="" className={styles.videoframe} />
                        <video width="100%" controls muted playsInline className={styles.video}>
                            <source src={intro} type="video/mp4" />
                        </video>
                        <img src={l_grass} alt="" srcset="" className={styles.leftgrass} />
                    </div>


                    <div className={styles.paper}>

                        <img src={paper} alt="" className={styles.textpaper} />
                        <img src={rock} alt="" className={styles.rockstone} />
                        <img src={side} alt="" className={styles.sidegrass} />
                        <p className={`font-brandon ${styles.text}`}>
                            At <strong> Jungle Morals,</strong> we believe every child<br />
                            deserves stories that make their<strong> hearts grow.</strong><br />
                            We create fun, engaging, research-backed<br />
                            content that nurtures emotional intelligence,<br />
                            <strong>kindness,</strong> and <strong> confidence</strong> in children.<br />
                            Through lovable characters, catchy songs,<br />
                            and relatable stories, we help kids learn<br />
                            <strong>empathy, resilience, and responsibility—</strong><br />
                            while giving parents a safe, meaningful<br />
                            alternative to passive screen time.<br />
                            <strong>Jungle Morals</strong> reimagines the screen<br />
                            as a place where <strong> families can build</strong><br />
                            values together, spark conversations that<br />
                            matter, and connect through stories<br />
                            <strong> filled with warmth and purpose.</strong>
                        </p>
                    </div>

                </div>
                <div className={styles.secondsec}>
                    <img src={tboard} alt="" className={styles.tboard} />
                    <h1 className={`font-adventuring ${styles.tboardtext}`}>Brand Pillars</h1>
                    <img src={pillar1} alt="pillar1" className={styles.pillar1} />
                    <h2 className={`font-adventuring ${styles.pillar1text1}`}>Core Values </h2>
                    <h2 className={`.font-brandon  ${styles.pillar1text2}`}>
                        <strong>Integrity -</strong>  <br />
                        Honesty and <br />
                        Moral clarity.
                    </h2>
                    <h2 className={`.font-brandon  ${styles.pillar1text3}`}>
                        <strong>Empathy</strong> - <br />
                        Kindness at the <br />
                        heart of every <br />
                        interaction.
                    </h2>
                    <h2 className={`.font-brandon  ${styles.pillar1text4}`}>
                        <strong>Creativity</strong> <br />
                        Bold, imaginative <br />
                        storytelling.
                    </h2>
                    <h2 className={`.font-brandon  ${styles.pillar1text5}`}>
                        <strong>Inclusivity</strong> - <br />
                        Diverse <br />
                        characters, <br />
                        cultures, <br />
                        and situations.
                    </h2>
                    <h2 className={`.font-brandon  ${styles.pillar1text6}`}>
                        <strong>Impact</strong> - <br />
                        Entertainment <br />
                        with educational <br />
                        and social <br />
                        benefits.
                    </h2>
                    <img src={pillar2} alt="pillar2" className={styles.pillar2} />
                    <h2 className={`font-adventuring ${styles.pillar2text1}`}>Brand Personality </h2>
                    <h2 className={`.font-brandon  ${styles.pillar2text2}`}>
                        <strong>Playful</strong> <br />
                        <strong>Teacher</strong> -<br />
                        Wise but <br />
                        approachable
                    </h2>
                    <h2 className={`.font-brandon  ${styles.pillar2text3}`}>
                        <strong>Cheer-Leader</strong><br />
                        Celebrates<br />
                        every child's<br />
                        potential </h2>
                    <h2 className={`.font-brandon  ${styles.pillar2text4}`}>
                        <strong>Adventurer</strong> - <br />
                        Curious and <br />
                        bold
                    </h2>
                    <h2 className={`.font-brandon  ${styles.pillar2text5}`}>
                        <strong>Friend</strong> <br />
                        <strong>And Guide</strong>- <br />
                        Relatable, <br />
                        never preachy
                    </h2>
                    <h2 className={`.font-brandon  ${styles.pillar2text6}`}>
                        <strong>Nurturer</strong> – <br />
                        Calm, <br />
                        comforting, <br />
                        and emotionally <br />
                        safe
                    </h2>
                    <img src={pillar3} alt="pillar3" className={styles.pillar3} />
                    <h2 className={`font-adventuring ${styles.pillar3text1}`}>The purpose </h2>
                    <h2 className={`.font-brandon  ${styles.pillar3text2}`}>
                        To <strong>inspire</strong> growing <br />
                        young minds <br />
                        through engaging, <br />
                        <strong>value- driven</strong> <br />
                        content that <br />
                        <strong>nurture empathy</strong>, <br />
                        curiosity, and <br />
                        positive <br />
                        character traits <br />
                        — <strong>building</strong> a <br />
                        generation of <br />
                        kind, confident <br />
                        social responsible <br />
                        individuals who <br />
                        lead with <strong>courage</strong> <br />
                        and <strong>heart</strong> and <br />
                        make the world <br />
                        a better place.
                    </h2>
                    <img src={big_rock }alt="big rock" className={styles.big_rock} />
                    <img src={small_rock} alt="small rock" className={styles.small_rock} />
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default AboutUs;