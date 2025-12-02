import React, { useEffect, useRef, useState } from 'react';
import styles from './WhatWeDo.module.css';
import Navbar from './Navbar';
import Footer from './Footer';

// NOTE: Update these imports to match actual filenames in
// src/assets/What We Do Page Assests/2x/
// The names below are placeholders; adjust to your asset names.
import banner from '../assets/What We Do Page Assests/2x/banner.png';

import birdLeft from '../assets/What We Do Page Assests/2x/bird-right.png';
import storysnap1 from '../assets/What We Do Page Assests/Snippets/Storysnap.jpg';
import storysnap2 from '../assets/What We Do Page Assests/Snippets/Storysnap2.jpg';

import birdCenter from '../assets/What We Do Page Assests/2x/bird-center.png';
import interactivesnap1 from '../assets/What We Do Page Assests/Snippets/Interactivessnap.jpg'
import interactivesnap2 from '../assets/What We Do Page Assests/Snippets/Interactivessnap2.jpg'

import birdRight from '../assets/What We Do Page Assests/2x/bird-left.png';
import jinglesnap1 from '../assets/What We Do Page Assests/Snippets/jinglesnap.jpg'
import jinglesnap2 from '../assets/What We Do Page Assests/Snippets/jinglesnap2.jpg'

import hipo from '../assets/What We Do Page Assests/2x/hipo.png';
import cow from '../assets/What We Do Page Assests/2x/cow.png';
import elephant from '../assets/What We Do Page Assests/2x/elephant.png';
import oak from '../assets/What We Do Page Assests/2x/oak.png';
import info from '../assets/What We Do Page Assests/2x/info.png';
import sourceBanner1 from '../assets/What We Do Page Assests/2x/info1.png';
import sourceBanner2 from '../assets/What We Do Page Assests/2x/info2.png';
import sourceBanner3 from '../assets/What We Do Page Assests/2x/info3.png';
import sourceBanner4 from '../assets/What We Do Page Assests/2x/info4.png';
import sourceBanner5 from '../assets/What We Do Page Assests/2x/info5.png';
import sourceBanner6 from '../assets/What We Do Page Assests/2x/info6.png';
import sourceBanner7 from '../assets/What We Do Page Assests/2x/info7.png';
import sourceBanner8 from '../assets/What We Do Page Assests/2x/info8.png';
import activity1 from '../assets/What We Do Page Assests/2x/activity1.png';
import activity2 from '../assets/What We Do Page Assests/2x/activity2.png';
import activity3 from '../assets/What We Do Page Assests/2x/activity3.png';
import activity11 from '../assets/What We Do Page Assests/2x/activity11.png';
import activity21 from '../assets/What We Do Page Assests/2x/activity21.png';
import activity31 from '../assets/What We Do Page Assests/2x/activity31.png';
import elephantcrew from '../assets/What We Do Page Assests/2x/elephantcrew.png'
import chess from '../assets/What We Do Page Assests/2x/chess.png'
import dogs from '../assets/What We Do Page Assests/2x/dogs.png'
import infoboard from '../assets/What We Do Page Assests/2x/infoboard.png'
import kids1 from '../assets/What We Do Page Assests/Activity Card/kids_1.png'
import kids2 from '../assets/What We Do Page Assests/Activity Card/kids_2.png'
import teacher_1 from '../assets/What We Do Page Assests/Activity Card/Teacher_1.png'
import teacher_2 from '../assets/What We Do Page Assests/Activity Card/Teacher_2.png'
import parent1 from '../assets/What We Do Page Assests/Activity Card/Parents_1.png'
import parent2 from '../assets/What We Do Page Assests/Activity Card/Parents_2.png'



// Image to display in modal when info icons are clicked
function Whatwedo() {
    // Popover anchored beside clicked info icon
    const [popover, setPopover] = useState({ open: false, img: null, imgs: null, top: 0, left: 0, centered: false });
    const [flipIndex, setFlipIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const anchorRef = useRef(null);

    const openPopover = (evt, img) => {
        const rect = evt.currentTarget.getBoundingClientRect();
        const gap = 12; // px gap from icon
        const assumedMaxWidth = 360; // keep within viewport
        const left = Math.min(rect.right + gap, window.innerWidth - assumedMaxWidth - 8);
        const top = rect.top + rect.height / 2; // vertically center to icon
        setPopover({ open: true, img, top, left });
    };

    const closePopover = () => {
        setPopover({ open: false, img: null, imgs: null, top: 0, left: 0, centered: false });
        setFlipIndex(0);
        setIsFlipped(false);
    };

    const togglePopover = (evt, img) => {
        // If clicking the same icon again, close it
        if (popover.open && anchorRef.current === evt.currentTarget) {
            closePopover();
            return;
        }
        anchorRef.current = evt.currentTarget;
        openPopover(evt, img);
    };

    // Open/Toggle a popover that contains multiple images (e.g., activity cards)
    const openPopoverGroup = (evt, imgs) => {
        const rect = evt.currentTarget.getBoundingClientRect();
        const gap = 12;
        const assumedMaxWidth = 360;
        const left = Math.min(rect.right + gap, window.innerWidth - assumedMaxWidth - 8);
        const top = rect.top + rect.height / 2;
        setPopover({ open: true, img: null, imgs, top, left, centered: false });
        setFlipIndex(0);
        setIsFlipped(false);
    };

    const togglePopoverGroup = (evt, imgs) => {
        if (popover.open && anchorRef.current === evt.currentTarget) {
            closePopover();
            return;
        }
        anchorRef.current = evt.currentTarget;
        openPopoverGroup(evt, imgs);
    };

    // Centered dialog variant (for activity1)
    const openCenteredGroup = (evt, imgs) => {
        setPopover({ open: true, img: null, imgs, top: window.innerHeight / 2, left: window.innerWidth / 2, centered: true });
        setFlipIndex(0);
        setIsFlipped(false);
        anchorRef.current = evt.currentTarget;
    };

    const toggleCenteredGroup = (evt, imgs) => {
        if (popover.open && popover.centered) {
            // If already centered and coming from same trigger, close
            if (anchorRef.current === evt.currentTarget) {
                closePopover();
                return;
            }
        }
        openCenteredGroup(evt, imgs);
    };

    const handleFlip = () => {
        if (!Array.isArray(popover.imgs) || popover.imgs.length < 2) return;
        setIsFlipped(f => !f);
        setFlipIndex(i => (i === 0 ? 1 : 0));
    };

    useEffect(() => {
        if (!popover.open) return;
        const onKey = (e) => { if (e.key === 'Escape') closePopover(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [popover.open]);

    // Recalculate popover position on scroll / resize so it stays with the icon
    useEffect(() => {
        if (!popover.open) return;
        if (popover.centered) return; // no repositioning needed for centered dialog
        const rePos = () => {
            if (!anchorRef.current) return;
            const rect = anchorRef.current.getBoundingClientRect();
            const gap = 12;
            const assumedMaxWidth = 360;
            const left = Math.min(rect.right + gap, window.innerWidth - assumedMaxWidth - 8);
            const top = rect.top + rect.height / 2;
            setPopover(p => ({ ...p, top, left }));
        };
        // Use passive listeners for scroll for performance
        window.addEventListener('scroll', rePos, { passive: true, capture: true });
        window.addEventListener('resize', rePos, { passive: true });
        // Initial positioning sync (in case of layout shift)
        rePos();
        return () => {
            window.removeEventListener('scroll', rePos, true);
            window.removeEventListener('resize', rePos);
        };
    }, [popover.open, popover.centered]);

    return (
        <>
            <Navbar />
            <section className={styles.wrapper}>
                <header className={styles.header}>
                    <img src={banner} alt="Entertainment with a Heartbeat" className={styles.banner} />
                </header>

                <div className={styles.cardsRow}>
                    <div className={styles.card}>
                        <div className={styles.birdWrap}>
                            <img src={birdLeft}
                             alt="Bird"
                              className={styles.bird1} 
                              role='button'
                              tabIndex={0}
                              onClick={(e) => toggleCenteredGroup(e,[storysnap1,storysnap2])}
                              onKeyDown={(e)=>{if(e.key === 'Enter' || e.key === '') {toggleCenteredGroup(e,[storysnap1,storysnap2]); } }}
                              />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.birdWrap}>
                            <img src={birdCenter} 
                            alt="Bird2"
                             className={styles.bird2} 
                             role='button'
                             tabIndex={0}
                             onClick={(e) => toggleCenteredGroup(e,[interactivesnap1,interactivesnap2])}
                             onKeyDown={(e)=>{if(e.key === 'Enter' || e.key === '') {toggleCenteredGroup(e,[interactivesnap1,interactivesnap2]); } }}

                             />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.birdWrap}>
                            <img src={birdRight}
                             alt="Bird3" 
                             className={styles.bird3}
                               role='button'
                             tabIndex={0}
                             onClick={(e) => toggleCenteredGroup(e,[jinglesnap1,jinglesnap2])}
                             onKeyDown={(e)=>{if(e.key === 'Enter' || e.key === '') {toggleCenteredGroup(e,[jinglesnap1,jinglesnap2]); } }}
                              />
                        </div>
                    </div>
                </div>
                <div className={styles.textSection}>
                    <div className={styles.textContainer}>
                        <img src={hipo} alt="hipo" className={styles.hipo} />
                        <img src={cow} alt="cow" className={styles.cow} />
                        <img src={elephant} alt="elephant" className={styles.elephant} />
                        <img src={oak} alt="oak" className={styles.oak} />
                        <img src={info} alt="info" className={`${styles.imfo1} ${styles.infoBtn}`} role="button" tabIndex={0} onClick={(e) => togglePopover(e, sourceBanner1)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { togglePopover(e, sourceBanner1) } }} />
                        <img src={info} alt="info2" className={`${styles.imfo2} ${styles.infoBtn}`} role="button" tabIndex={0} onClick={(e) => togglePopover(e, sourceBanner2)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { togglePopover(e, sourceBanner2) } }} />
                        <img src={info} alt="info3" className={`${styles.imfo3} ${styles.infoBtn}`} role="button" tabIndex={0} onClick={(e) => togglePopover(e, sourceBanner3)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { togglePopover(e, sourceBanner3) } }} />
                        <img src={info} alt="info4" className={`${styles.imfo4} ${styles.infoBtn}`} role="button" tabIndex={0} onClick={(e) => togglePopover(e, sourceBanner4)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { togglePopover(e, sourceBanner4) } }} />
                        <img src={info} alt="info5" className={`${styles.imfo5} ${styles.infoBtn}`} role="button" tabIndex={0} onClick={(e) => togglePopover(e, sourceBanner5)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { togglePopover(e, sourceBanner5) } }} />
                        <img src={info} alt="info6" className={`${styles.imfo6} ${styles.infoBtn}`} role="button" tabIndex={0} onClick={(e) => togglePopover(e, sourceBanner6)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { togglePopover(e, sourceBanner6) } }} />
                        <img src={info} alt="info7" className={`${styles.imfo7} ${styles.infoBtn}`} role="button" tabIndex={0} onClick={(e) => togglePopover(e, sourceBanner7)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { togglePopover(e, sourceBanner7) } }} />
                        <img src={info} alt="info8" className={`${styles.imfo8} ${styles.infoBtn}`} role="button" tabIndex={0} onClick={(e) => togglePopover(e, sourceBanner8)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { togglePopover(e, sourceBanner8) } }} />
                        <img
                            src={activity1}
                            alt="activity1"
                            className={styles.activity1}
                            role='button'
                            tabIndex={0}
                            onClick={(e) => toggleCenteredGroup(e, [kids1, kids2])}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { toggleCenteredGroup(e, [kids1, kids2]); } }}
                        />
                        <img
                            src={activity2}
                            alt="activity2"
                            className={styles.activity2}
                            role='button'
                            tabIndex={0}
                            onClick={(e) => toggleCenteredGroup(e, [teacher_1, teacher_2])}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { toggleCenteredGroup(e, [teacher_1, teacher_2]); } }}
                        />
                        <img src={activity3}
                            alt="activity3"
                            className={styles.activity3}
                            role='button'
                            tabIndex={0}
                            onClick={(e) => toggleCenteredGroup(e, [parent1, parent2])}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { toggleCenteredGroup(e, [parent1, parent2]) } }}
                        />
                        <img src={activity11} alt="activity11" className={styles.activity11} />
                        <img src={activity21} alt="activity21" className={styles.activity21} />
                        <img src={activity31} alt="activity31" className={styles.activity31} />

                    </div>
                    <div className={styles.textContent}>
                        <img src={elephantcrew} alt="elephant crew" className={styles.elephantcrew} />
                        <img src={chess} alt="chess" className={styles.chess} />
                        <img src={dogs} alt="dogs" className={styles.dogs} />
                        <img src={infoboard} alt="infoboard" className={styles.infoboard} />
                    </div>

                </div>
            </section>

            {popover.open && (
                <>
                    {popover.centered && (
                        <div className={styles.backdropLayer} onClick={closePopover} />
                    )}
                    <div
                        className={`${styles.popoverRoot} ${popover.centered ? styles.popoverRootCentered : ''}`}
                        style={popover.centered ? undefined : { top: popover.top, left: popover.left }}
                        role="dialog"
                        aria-modal={popover.centered ? 'true' : undefined}
                    >
                        <div className={styles.popoverCard} onClick={(e) => e.stopPropagation()}>
                            {Array.isArray(popover.imgs) && popover.imgs.length >= 2 ? (
                                <div
                                    className={`${styles.flipCard} ${isFlipped ? styles.flipped : ''}`}
                                    onClick={handleFlip}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { handleFlip(); } }}
                                >
                                    <div className={styles.flipInner}>
                                        <div className={styles.flipFront}>
                                            <img src={popover.imgs[0]} alt="activity-popover-front" className={styles.popoverImg} />
                                        </div>
                                        <div className={styles.flipBack}>
                                            <img src={popover.imgs[1]} alt="activity-popover-back" className={styles.popoverImg} />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {Array.isArray(popover.imgs) && popover.imgs.map((src, idx) => (
                                        <img key={idx} src={src} alt={`activity-popover-${idx + 1}`} className={styles.popoverImg} />
                                    ))}
                                    {popover.img && (
                                        <img src={popover.img} alt="info-popover" className={styles.popoverImg} />
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </>
            )}

            <Footer />
        </>
    );
}
export default Whatwedo;