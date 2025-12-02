import React from "react";
import Navbar from "./Navbar";
import "./AboutUs.css";
import paper from "../assets/Light aboutus_img/Asset 17.webp";
import rock from "../assets/Light aboutus_img/Asset 16.webp";

import tboard from "../assets/Light aboutus_img/Asset 14.webp"
import pillar1 from "../assets/Light aboutus_img/Asset 21.webp"
import pillar2 from "../assets/Light aboutus_img/Asset 20.webp"
import pillar3 from "../assets/Light aboutus_img/Asset 18.webp"
import small_rock from "../assets/Light aboutus_img/Asset 19.webp"
import big_rock from "../assets/Light aboutus_img/Asset 15.webp"
import l_grass from "../assets/Light aboutus_img/Asset 12.webp"
import r_grass from "../assets/Light aboutus_img/Asset 13.webp"
import intro from "../assets/Light aboutus_img/Intro.mp4"
import side from "../assets/Light aboutus_img/Asset 24.webp"
import Footer from "./Footer";
// import lion from "../assets/webp/lion.webp";
// import elephant from "../assets/webp/elephant.webp";
// import main_bg from "../assets/About_img/Asset 25.svg"

function AboutUs() {



    return (
        <div className="about-page">
            <Navbar />

            <div className="b_p">
                <div className="board">
                    <img src={l_grass} className="l_grass" alt="left grass" />
                    <img src={r_grass} className="r_grass" alt="right grass" />
                    <div className="video-wrapper">
                        <video width="100%" controls playsInline>
                            <source src={intro} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                <div className="side">
                    <img src={side} className="mount_img" alt="side mounntain" />
                    <img src={paper} className="paper_img" alt="paper decoration" />
                    <p className="font-brandon-regular">At <span className="font-brandon-bold">Jungle Morals,</span> we believe every child <br /> deserves stories that make their <span className="font-brandon-bold">hearts grow.</span> <br /> We create fun, engaging, research-backed <br /> content that nurtures emotional intelligence, <br /> <span className="font-brandon-bold">kindness,</span> and <span className="font-brandon-bold">confidence</span> in children. <br /> Through lovable characters, catchy songs, <br /> and relatable stories, we help kids learn <br /> <span className="font-brandon-bold">empathy, resilience, and responsibility—</span> <br /> while giving parents a safe, meaningful <br /> alternative to passive screen time. <br /> <span className="font-brandon-bold">Jungle Morals</span> reimagines the screen <br />
                        as a place where <span className="font-brandon-bold">families can build</span><br /> values together, spark conversations that <br /> matter, and connect through stories <br /> <span className="font-brandon-bold">filled with warmth and purpose.</span> </p>

                </div>
            </div>

            <div className="main">

                <div className="rock">
                    <img src={rock} alt="" />
                </div>


                <div className="pillars_bg">
                    <div className="pillars_container">
                        <div className="heading">
                            <img src={tboard} className="tboard" alt="board" />
                            <h2 className="font-adventuring">Brand Pillars</h2>
                        </div>
                        <div className="pillars">
                            <div className="pillar_box">
                                <img src={pillar1} className="pillar_img" alt="pillar - core values" />
                                <h3 className="font-adventuring pillar_heading1">Core Values</h3>
                                <div className="pillar_text">
                                    <span className="font-brandon-bold box_1">Integrity-</span>
                                    <p className="font-brandon-regular line_1">Honesty and Moral clarity.</p>
                                    {/* Second line */}
                                    <span className="font-brandon-bold box_2">Empathy-</span>
                                    <p className="font-brandon-regular line_2">Kindness at the heart of every interaction.</p>
                                    {/* Third line */}
                                    <span className="font-brandon-bold box_3">Creativity-</span>
                                    <p className="font-brandon-regular line_3">Bold, imaginative storytelling.</p>
                                    {/* Fourth line */}
                                    <span className="font-brandon-bold box_4">Inclusivity-</span>
                                    <p className="font-brandon-regular line_4">Diverse characters, cultures, and situations.</p>
                                    {/* Fifth line */}
                                    <span className="font-brandon-bold box_5">Impact-</span>
                                    <p className="font-brandon-regular line_5">Entertainment with educational and social benefits.</p>
                                </div>
                            </div>

                            <div className="pillar_box">
                                <img src={pillar2} className="pillar_img" alt="pillar - personality" />
                                <h3 className="font-adventuring pillar_heading2">Brand Personality</h3>
                                <div className="pillar_text">
                                    <span className="font-brandon-bold boxTwo_1">Playful</span>
                                    <p className="font-brandon-bold boxTwo_1_2">Teacher-</p>
                                    <p className="font-brandon-regular lineTwo_1">Wise but</p>
                                    <p className="font-brandon-regular lineTwo_2">approachable</p>
                                    {/* Second line */}
                                    <div className="font-brandon-bold box_2_text">
                                        <span>Cheer-</span>
                                        <span>Leader-</span>
                                    </div>
                                    <p className="font-brandon-regular box_2_line_2">Celebrates every child's potential</p>
                                </div>
                                <span className="font-brandon-bold box2_line3">Adventurer-</span>
                                <p className="font-brandon-regular box_2_line_3">Curious and bold</p>
                                {/* Three line */}
                                <span className="font-brandon-bold box_2sp_2">Friend <p>And Guide-</p></span>
                                <p className="font-brandon-regular box_2_p_2">Relatable,</p>
                                <p className="font-brandon-regular box_2_last">never preachy</p>
                                {/* Fourth line */}
                                <div className="box_2_part">
                                    <span className="font-brandon-bold">Nurturer –</span>
                                </div>
                                <p className="font-brandon-regular box_2line_4">Calm, </p>
                                <p className="font-brandon-regular box_2line_5">comforting, </p>
                                <p className="font-brandon-regular box_2last">and emotionally safe</p>
                            </div>

                            <div className="pillar_box">
                                <img src={pillar3} className="pillar2" alt="pillar - purpose" />
                                <h3 className="font-adventuring pillar_heading1">The Purpose</h3>
                                <div className="pillar_text">
                                    <p className="font-brandon-regular box_3_1">To <span className="font-brandon-bold">inspire</span> growing</p>
                                    <p className="font-brandon-regular box_3_1_2">young minds through engaging,</p>
                                    <div className="font-brandon-bold s_2">
                                        <span>value- </span>
                                        <span>driven</span>
                                    </div>
                                    {/* {Second Line} */}
                                    <p className="font-brandon-regular box_3_2">content that</p>
                                    <div className="font-brandon-bold box_2_span">
                                        <span>nurture  </span>
                                        <span>empathy,</span>
                                    </div>
                                    <p className="font-brandon-regular box_3line">curiosity, and positive</p>
                                    <p className="font-brandon-regular box_3line_2">character traits</p>
                                    <p className="font-brandon-regular box_3line_3"><span className="font-brandon-bold">— building</span> a</p>
                                    {/* {Thid Line} */}
                                    <p className="font-brandon-regular box_3_3">generation of kind, confident</p>
                                    <p className="font-brandon-regular box_3_3line">social responsible individuals who</p>
                                    {/* {Fourth Line} */}
                                    <p className="font-brandon-regular box_3_4">lead with <span className="font-brandon-bold">courage</span></p>
                                        <p className="font-brandon-regular box_3_4line">and <span className="font-brandon-bold">heart</span> and</p>
                                         <p className="font-brandon-regular box_3line_4">make the world a better place.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={small_rock} className="sm_rock" alt="small rock" />
                        </div>
                        <div>
                            <img src={big_rock} className="b_rock" alt="Big Rock" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    );
}

export default AboutUs;
