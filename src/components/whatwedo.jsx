import React, { useEffect, useRef, useState } from 'react';
import styles from './WhatWeDo.module.css';

// NOTE: Update these imports to match actual filenames in
// src/assets/What We Do Page Assests/2x/
// The names below are placeholders; adjust to your asset names.
import banner from '../assets/What We Do Page Assests/2x/banner.png';
import birdLeft from '../assets/What We Do Page Assests/2x/bird-right.png';
import birdCenter from '../assets/What We Do Page Assests/2x/bird-center.png';
import birdRight from '../assets/What We Do Page Assests/2x/bird-left.png';
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
// Image to display in modal when info icons are clicked
function Whatwedo() {
    // Popover anchored beside clicked info icon
    const [popover, setPopover] = useState({ open: false, img: null, top: 0, left: 0 });
    const anchorRef = useRef(null);

    const openPopover = (evt, img) => {
        const rect = evt.currentTarget.getBoundingClientRect();
        const gap = 12; // px gap from icon
        const assumedMaxWidth = 360; // keep within viewport
        const left = Math.min(rect.right + gap, window.innerWidth - assumedMaxWidth - 8);
        const top = rect.top + rect.height / 2; // vertically center to icon
        setPopover({ open: true, img, top, left });
    };

    const closePopover = () => setPopover({ open: false, img: null, top: 0, left: 0 });

    const togglePopover = (evt, img) => {
        // If clicking the same icon again, close it
        if (popover.open && anchorRef.current === evt.currentTarget) {
            closePopover();
            return;
        }
        anchorRef.current = evt.currentTarget;
        openPopover(evt, img);
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
    }, [popover.open]);

    return (
        <>
            <section className={styles.wrapper}>
                <header className={styles.header}>
                    <img src={banner} alt="Entertainment with a Heartbeat" className={styles.banner} />
                </header>

                <div className={styles.cardsRow}>
                    <div className={styles.card}>
                        <div className={styles.birdWrap}>
                            <img src={birdLeft} alt="Bird" className={styles.bird1} />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.birdWrap}>
                            <img src={birdCenter} alt="Bird2" className={styles.bird2} />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.birdWrap}>
                            <img src={birdRight} alt="Bird3" className={styles.bird3} />
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
                        <img src={activity1} alt="activity1" className={styles.activity1} />
                        <img src={activity2} alt="activity2" className={styles.activity2} />
                        <img src={activity3} alt="activity3" className={styles.activity3} />
                        <img src={activity11} alt="activity11" className={styles.activity11} />
                        <img src={activity21} alt="activity21" className={styles.activity21} />
                        <img src={activity31} alt="activity31" className={styles.activity31} />

                    </div>
                    <div className={styles.textContent}>
                         <img src={elephantcrew} alt="elephant crew"className={styles.elephantcrew} />
                         <img src={chess} alt="chess"className={styles.chess} />
                         <img src={dogs} alt="dogs"className={styles.dogs} />
                         <img src={infoboard} alt="infoboard"className={styles.infoboard} />
                    </div>

                </div>
            </section> 

              {popover.open && (
                <div
                    className={styles.popoverRoot}
                    style={{ top: popover.top, left: popover.left }}
                    role="dialog"
                >
                    <div className={styles.popoverCard}>
                        {popover.img && (
                            <img src={popover.img} alt="info-popover" className={styles.popoverImg} />
                        )}
                    </div>
                </div>
               )}

        </>
    );
}
export default Whatwedo;