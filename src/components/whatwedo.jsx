import React, { useEffect, useRef, useState } from 'react';
import styles from './WhatWeDo.module.css';
import Navbar from './Navbar';
import Footer from './Footer';

// NOTE: Update these imports to match actual filenames in
// src/assets/What We Do Page Assests/2x/
// The names below are placeholders; adjust to your asset names.
import banner from '../assets/What We Do Page Assests/1x/board.png';

import birdLeft from '../assets/What We Do Page Assests/1x/bird-right.png';
import storysnap1 from '../assets/What We Do Page Assests/Snippets/Storysnap.jpg';
import storysnap2 from '../assets/What We Do Page Assests/Snippets/Storysnap2.jpg';

import birdCenter from '../assets/What We Do Page Assests/1x/bird-center.png';
import interactivesnap1 from '../assets/What We Do Page Assests/Snippets/Interactivessnap.jpg'
import interactivesnap2 from '../assets/What We Do Page Assests/Snippets/Interactivessnap2.jpg'

import birdRight from '../assets/What We Do Page Assests/1x/bird-left.png';
import jinglesnap1 from '../assets/What We Do Page Assests/Snippets/jinglesnap.jpg'
import jinglesnap2 from '../assets/What We Do Page Assests/Snippets/jinglesnap2.jpg'

import hipo from '../assets/What We Do Page Assests/1x/hippo.png';
import cow from '../assets/What We Do Page Assests/1x/cow.png';
import elephant from '../assets/What We Do Page Assests/1x/elephant.png';
import oak from '../assets/What We Do Page Assests/1x/oak.png';
import activitycard from '../assets/What We Do Page Assests/1x/activity_card.png';
import info from '../assets/What We Do Page Assests/1x/infoB.png';
import info1 from '../assets/What We Do Page Assests/1x/info.png';
import sourceBanner1 from '../assets/What We Do Page Assests/1x/Baord_1.png';
import sourceBanner2 from '../assets/What We Do Page Assests/1x/Baord_2.png';
import sourceBanner3 from '../assets/What We Do Page Assests/1x/Baord_3.png';
import sourceBanner4 from '../assets/What We Do Page Assests/1x/Baord_4.png';
import sourceBanner5 from '../assets/What We Do Page Assests/1x/Baord_5.png';
import sourceBanner6 from '../assets/What We Do Page Assests/1x/Baord_6.png';
import sourceBanner7 from '../assets/What We Do Page Assests/1x/Baord_7.png';
import sourceBanner8 from '../assets/What We Do Page Assests/1x/Baord_8.png';
import sourceBanner9 from '../assets/What We Do Page Assests/1x/Baord_9.png';
import sourceBanner10 from '../assets/What We Do Page Assests/1x/Baord_10.png';
import sourceBanner11 from '../assets/What We Do Page Assests/1x/Baord_11.png';
import activity1 from '../assets/What We Do Page Assests/1x/activity1.png';
import activity2 from '../assets/What We Do Page Assests/1x/activity2.png';
import activity3 from '../assets/What We Do Page Assests/1x/activity3.png';
import elephantcrew from '../assets/What We Do Page Assests/1x/elephantcrew.png'
import chess from '../assets/What We Do Page Assests/1x/chess.png'
import dogs from '../assets/What We Do Page Assests/1x/dogs.png'
import infoboard from '../assets/What We Do Page Assests/1x/board.png'
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
    const info1Ref = useRef(null);
    const info2Ref = useRef(null);
    const info3Ref = useRef(null);
    const info4Ref = useRef(null);
    const info5Ref = useRef(null);
    const info6Ref = useRef(null);
    const info7Ref = useRef(null);
    const info8Ref = useRef(null);
    const info9Ref = useRef(null);
    const info10Ref = useRef(null);
    const info11Ref = useRef(null);

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
                    <h1 className={`font-adventuring ${styles.title}`}>Entertainment with a heartbeat</h1>
                </header>

                <div className={styles.cardsRow}>
                    <div className={styles.card}>
                        <div className={styles.birdWrap}>
                            <img src={birdLeft}
                                alt="Bird"
                                className={styles.bird1}
                                role='button'
                                tabIndex={0}
                                onClick={(e) => toggleCenteredGroup(e, [storysnap1, storysnap2])}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === '') { toggleCenteredGroup(e, [storysnap1, storysnap2]); } }}
                            />
                            <h3 className={`font-adventuring ${styles.title1}`}>Stories</h3>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.birdWrap}>
                            <img src={birdCenter}
                                alt="Bird2"
                                className={styles.bird2}
                                role='button'
                                tabIndex={0}
                                onClick={(e) => toggleCenteredGroup(e, [jinglesnap1, jinglesnap2])}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === '') { toggleCenteredGroup(e, [jinglesnap1, jinglesnap2]); } }}
                            />
                            <h3 className={`font-adventuring ${styles.title2}`}>Jingles</h3>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.birdWrap}>
                            <img src={birdRight}
                                alt="Bird3"
                                className={styles.bird3}
                                role='button'
                                tabIndex={0}
                                onClick={(e) => toggleCenteredGroup(e, [interactivesnap1, interactivesnap2])}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === '') { toggleCenteredGroup(e, [interactivesnap1, interactivesnap2]); } }}
                            />
                            <h3 className={`font-adventuring ${styles.title3}`}>Interactives</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.textSection}>
                    <div className={styles.textContainer}>
                        <img src={hipo} alt="hipo" className={styles.hipo} />
                        <h4 className={`font-brandon ${styles.hippotext}`}>
                            Moral stories <strong>designed to nurture</strong> <br />
                            emotional intelligence,  foster <br />
                            <strong>empathy</strong>, and support thoughtful <br />
                            decision-making in children <br />
                            <br />
                        </h4>
                        <h4 className={`font-brandon ${styles.hippotext2}`}>
                            <strong>Calmly paced </strong> narration <br />
                            (apx. 100-150 wpm) with <br />
                            minimal visual cuts, designed to <br />
                            <strong>improve intelligibility</strong>,<br />
                            comprehension, and listening <br />
                            <strong>comfort</strong> for young children <br />
                        </h4>
                        <h4 className={`font-brandon ${styles.hippotext3}`}>
                            Engaging, <strong>interactive</strong> content <br />
                            designed to hold attention <br />
                            without overstimulation
                        </h4>
                        <img src={cow} alt="cow" className={styles.cow} />
                        <h4 className={`font-brandon ${styles.cowtext1}`}>
                            <strong>Fun</strong>, memorable  jingles to <br />
                            internalize <strong>positive values</strong> and <br />
                            improve <strong>motor skills</strong> <br />
                            through dance <br /> </h4>
                        <h4 className={`font-brandon ${styles.cowtext2}`}>
                            Encourages active play that <br />
                            supports <strong>healthy</strong> daily <strong>routines</strong>, <br />
                            <strong>better sleep</strong> patterns and <br />
                            improved <strong>emotional well-being</strong> <br /> </h4>
                        <h4 className={`font-brandon ${styles.cowtext3}`}>
                            <strong>Physical activity</strong> combined with <br />
                            active <strong>social interaction</strong> is <br />
                            associated with reduced <br />
                            symptoms of anxiety and <br />
                            depression</h4>
                        <img src={elephant} alt="elephant" className={styles.elephant} />
                        <h4 className={`font-brandon ${styles.elephanttext1}`}>
                            Thoughtfully designed <strong>interactive</strong> <br />
                            content that supports <strong>cognitive</strong> <br />
                            <strong>development</strong> and problem <br />
                            solving skills, while helping children <br />
                            explore <strong>real-world</strong> situations <br />
                        </h4>
                        <h4 className={`font-brandon ${styles.elephanttext2}`}>
                            Crafted in a <strong>game-show</strong> –style <br />
                            format that invites children <br />
                            to <strong>participate, choose</strong> <br />
                            responses, and stay actively <br />
                            engaged in the <strong>learning</strong> process <br />
                        </h4>
                        <h4 className={`font-brandon ${styles.elephanttext3}`}>
                            Interactions that gently teach <br />
                            both positive behaviours and <br />
                            behaviours to avoid—helping <br />
                            children understand social and <br />
                            moral norms</h4>
                        <img src={oak} alt="oak" className={styles.oak} />
                        <h4 className={`font-brandon ${styles.oaktext1}`}>
                            Children need spaced-out repetitions <br />
                            for <strong>enhanced learning</strong> and for <strong>improved</strong> recognition <strong>memory</strong> <br />
                        </h4>
                        <h4 className={`font-brandon ${styles.oaktext2}`}>
                            Combining visual, auditory, and interactive elements can support <strong>emotional</strong> <br />
                            <strong>processing</strong> and <strong>improved learning</strong> outcomes in early childhood <br />
                        </h4>
                        <h4 className={`font-brandon ${styles.oaktext3}`}>
                            <strong>Guided by research</strong>, Jungle Morals, through jingles, stories, and interactive, aims to help children <br />
                            understand emotions, <strong>build empathy,</strong>r and feel more connected. Our approach focuses on <strong>positive values</strong> <br />
                            and emotional tools that support <strong>children’s well-being</strong> and social development.
                        </h4>
                        <h4 className={`font-adventuring ${styles.oaktext4}`}>
                            AND we have...
                        </h4>
                        <img src={activitycard} alt="activity card" className={styles.activitycard} />
                        <h2 className={`font-adventuring ${styles.activitycardtitle}`}>Activity Cards</h2>

                        <div className={styles.imfo1Wrap}>
                            <img
                                src={info}
                                alt="info"
                                className={`${styles.imfo1} ${styles.infoBtn}`}
                                role="button"
                                tabIndex={0}
                                ref={info1Ref}
                                onClick={(e) => togglePopover(e, sourceBanner1)}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { togglePopover(e, sourceBanner1) } }}
                            />
                        </div>
                        <img src={info}
                            alt="info2"
                            className={`${styles.imfo2} ${styles.infoBtn}`}
                            role="button"
                            tabIndex={0}
                            ref={info2Ref}
                            onClick={(e) => togglePopover(e, sourceBanner2)}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { togglePopover(e, sourceBanner2) } }} />

                        <img src={info}
                            alt="info3"
                            className={`${styles.imfo3} ${styles.infoBtn}`}
                            role="button"
                            tabIndex={0}
                            ref={info3Ref}
                            onClick={(e) => togglePopover(e, sourceBanner3)}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { togglePopover(e, sourceBanner3) } }} />

                        <img src={info}
                            alt="info4"
                            className={`${styles.imfo4} ${styles.infoBtn}`}
                            role="button"
                            tabIndex={0}
                            ref={info4Ref}
                            onClick={(e) => togglePopover(e, sourceBanner4)}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { togglePopover(e, sourceBanner4) } }} />

                        <img src={info}
                            alt="info5"
                            className={`${styles.imfo5} ${styles.infoBtn}`}
                            role="button"
                            tabIndex={0}
                            ref={info5Ref}
                            onClick={(e) => togglePopover(e, sourceBanner5)}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { togglePopover(e, sourceBanner5) } }} />

                        <img src={info}
                            alt="info6"
                            className={`${styles.imfo6} ${styles.infoBtn}`}
                            role="button"
                            tabIndex={0}
                            ref={info6Ref}
                            onClick={(e) => togglePopover(e, sourceBanner6)}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { togglePopover(e, sourceBanner6) } }} />

                        <img src={info}
                            alt="info7"
                            className={`${styles.imfo7} ${styles.infoBtn}`}
                            role="button"
                            tabIndex={0}
                            ref={info7Ref}
                            onClick={(e) => togglePopover(e, sourceBanner7)}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { togglePopover(e, sourceBanner7) } }} />

                        <img src={info}
                            alt="info8"
                            className={`${styles.imfo8} ${styles.infoBtn}`}
                            role="button"
                            tabIndex={0}
                            ref={info8Ref}
                            onClick={(e) => togglePopover(e, sourceBanner8)}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { togglePopover(e, sourceBanner8) } }} />

                        <img src={info}
                            alt="info9"
                            className={`${styles.imfo9} ${styles.infoBtn}`}
                            role="button"
                            tabIndex={0}
                            ref={info9Ref}
                            onClick={(e) => togglePopover(e, sourceBanner9)}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { togglePopover(e, sourceBanner9) } }} />

                        <img src={info1}
                            alt="info10"
                            className={`${styles.imf10}
                           ${styles.infoBtn}`}
                            role="button"
                            tabIndex={0}
                            ref={info10Ref}
                            onClick={(e) => togglePopover(e, sourceBanner10)}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { togglePopover(e, sourceBanner10) } }} />

                        <img src={info1}
                            alt="info11"
                            className={`${styles.imf11} ${styles.infoBtn}`}
                            role="button"
                            tabIndex={0}
                            ref={info11Ref}
                            onClick={(e) => togglePopover(e, sourceBanner11)}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { togglePopover(e, sourceBanner11) } }} />

                        <img
                            src={activity1}
                            alt="activity1"
                            className={styles.activity1}
                            role='button'
                            tabIndex={0}
                            onClick={(e) => toggleCenteredGroup(e, [kids1, kids2])}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { toggleCenteredGroup(e, [kids1, kids2]); } }}
                        />
                        <h3 className={`font-adventuring ${styles.activitycardtitle1}`} >Empowering <br /> Children</h3>
                        <img
                            src={activity2}
                            alt="activity2"
                            className={styles.activity2}
                            role='button'
                            tabIndex={0}
                            onClick={(e) => toggleCenteredGroup(e, [teacher_1, teacher_2])}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { toggleCenteredGroup(e, [teacher_1, teacher_2]); } }}
                        />
                        <h3 className={`font-adventuring ${styles.activitycardtitle2}`} >Strengthening <br /> the Mind</h3>

                        <img src={activity3}
                            alt="activity3"
                            className={styles.activity3}
                            role='button'
                            tabIndex={0}
                            onClick={(e) => toggleCenteredGroup(e, [parent1, parent2])}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { toggleCenteredGroup(e, [parent1, parent2]) } }}
                        />
                        <h3 className={`font-adventuring ${styles.activitycardtitle3}`} >Reconnecting with <br /> Roots</h3>

                    </div>
                    <div className={styles.textContent}>
                        <img src={elephantcrew} alt="elephant crew" className={styles.elephantcrew} />
                        <img src={chess} alt="chess" className={styles.chess} />
                        <img src={dogs} alt="dogs" className={styles.dogs} />
                        <img src={infoboard} alt="infoboard" className={styles.infoboard} />
                        <h3 className={`font-adventuring ${styles.activitycardtitle4}`} >Grab your free activity card</h3>
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
                                        <div className={styles.popoverImgWrap}>
                                            {anchorRef.current === info1Ref.current ? (
                                                <a
                                                    href="https://www.researchgate.net/publication/360882342_Children_for_integrity_The_influence_of_moral_stories_on_pre-schoolers%27_integrity_values"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img src={popover.img} alt="info-popover" className={styles.popoverImg} />
                                                </a>
                                            ) : anchorRef.current === info2Ref.current ? (
                                                <a
                                                    href="https://pubmed.ncbi.nlm.nih.gov/39680790/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img src={popover.img} alt="info-popover" className={styles.popoverImg} />
                                                </a>
                                            ) : anchorRef.current === info3Ref.current ? (
                                                <a
                                                    href="https://jamanetwork.com/journals/jamapediatrics/fullarticle/2812151"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img src={popover.img} alt="info-popover" className={styles.popoverImg} />
                                                </a>
                                            ) : anchorRef.current === info4Ref.current ? (
                                                <a
                                                    href="https://pubmed.ncbi.nlm.nih.gov/40219825/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img src={popover.img} alt="info-popover" className={styles.popoverImg} />
                                                </a>
                                            ) : anchorRef.current === info5Ref.current ? (
                                                <a
                                                    href="https://www.who.int/docs/default-source/physical-activity/information-sheet-global-recommendations-on-physical-activity-for-health/physical-activity-recommendations-5-17years.pdf"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img src={popover.img} alt="info-popover" className={styles.popoverImg} />
                                                </a>
                                            ) : anchorRef.current === info6Ref.current ? (
                                                <a
                                                    href="https://link.springer.com/article/10.1186/s12889-025-22690-8"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img src={popover.img} alt="info-popover" className={styles.popoverImg} />
                                                </a>
                                            ) : anchorRef.current === info7Ref.current ? (
                                                <a
                                                    href="https://publications.aap.org/pediatrics/article/140/Supplement_2/S57/34173/Digital-Screen-Media-and-Cognitive-Development"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img src={popover.img} alt="info-popover" className={styles.popoverImg} />
                                                </a>
                                            ) : anchorRef.current === info8Ref.current ? (
                                                <a
                                                    href="https://link.springer.com/article/10.1186/s40561-019-0085-2"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img src={popover.img} alt="info-popover" className={styles.popoverImg} />
                                                </a>
                                            ) : anchorRef.current === info9Ref.current ? (
                                                <a
                                                    href="https://www.sciencedirect.com/science/article/abs/pii/S002209652100240X"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img src={popover.img} alt="info-popover" className={styles.popoverImg} />
                                                </a>
                                            ) : anchorRef.current === info10Ref.current ? (
                                                <a
                                                    href="https://pubmed.ncbi.nlm.nih.gov/2017039/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img src={popover.img} alt="info-popover" className={styles.popoverImg} />
                                                </a>
                                            ) : anchorRef.current === info11Ref.current ? (
                                                <a
                                                    href="https://www.researchgate.net/publication/341777573_Multimodal_Learning_Analytics_research_with_young_children_A_systematic_review"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img src={popover.img} alt="info-popover" className={styles.popoverImg} />
                                                </a>
                                            ) : (
                                                <img src={popover.img} alt="info-popover" className={styles.popoverImg} />
                                            )}
                                            {anchorRef.current === info1Ref.current && (
                                                <a
                                                    href="https://www.researchgate.net/publication/360882342_Children_for_integrity_The_influence_of_moral_stories_on_pre-schoolers%27_integrity_values"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.captionLink}
                                                >
                                                    <div className={`font-adventuring ${styles.captionOverlay1}`}>
                                                        Source: Clinical Child Psychology <br /> and Psychiatry Journal
                                                    </div>
                                                </a>
                                            )}
                                            {anchorRef.current === info2Ref.current && (
                                                <a
                                                    href="https://pubmed.ncbi.nlm.nih.gov/39680790/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.captionLink}
                                                >
                                                    <div className={`font-adventuring ${styles.captionOverlay2}`}>
                                                        Source: Journal of Speech Language <br /> and Hearing
                                                    </div>
                                                </a>
                                            )}
                                            {anchorRef.current === info3Ref.current && (
                                                <a
                                                    href="https://jamanetwork.com/journals/jamapediatrics/fullarticle/2812151"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.captionLink}
                                                >
                                                    <div className={`font-adventuring ${styles.captionOverlay3}`}>
                                                        Source: Pediatrics Journal of <br />
                                                        the American Medical Association
                                                    </div>
                                                </a>
                                            )}
                                            {anchorRef.current === info4Ref.current && (
                                                <a
                                                    href="https://pubmed.ncbi.nlm.nih.gov/40219825/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.captionLink}
                                                >
                                                    <div className={`font-adventuring ${styles.captionOverlay4}`}>
                                                        Source: International Association of <br />
                                                        Dance Medicine and Science
                                                    </div>
                                                </a>
                                            )}
                                            {anchorRef.current === info5Ref.current && (
                                                <a
                                                    href="https://www.who.int/docs/default-source/physical-activity/information-sheet-global-recommendations-on-physical-activity-for-health/physical-activity-recommendations-5-17years.pdf"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.captionLink}
                                                >
                                                    <div className={`font-adventuring ${styles.captionOverlay5}`}>
                                                        Source: World Health <br />
                                                        Organizations
                                                    </div>
                                                </a>
                                            )}
                                            {anchorRef.current === info6Ref.current && (
                                                <a
                                                    href="https://link.springer.com/article/10.1186/s12889-025-22690-8"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.captionLink}
                                                >
                                                    <div className={`font-adventuring ${styles.captionOverlay6}`}>
                                                        Source: Scientific Review <br />
                                                        by BioMed Central
                                                    </div>
                                                </a>
                                            )}
                                            {anchorRef.current === info7Ref.current && (
                                                <a
                                                    href="https://publications.aap.org/pediatrics/article/140/Supplement_2/S57/34173/Digital-Screen-Media-and-Cognitive-Development"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.captionLink}
                                                >
                                                    <div className={`font-adventuring ${styles.captionOverlay7}`}>
                                                        Source: American Academy <br />
                                                        of Pediatrics
                                                    </div>
                                                </a>
                                            )}
                                            {anchorRef.current === info8Ref.current && (
                                                <a
                                                    href="https://link.springer.com/article/10.1186/s40561-019-0085-2"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.captionLink}
                                                >
                                                    <div className={`font-adventuring ${styles.captionOverlay8}`}>
                                                        Source: Smart Learning <br />
                                                        Environments
                                                    </div>
                                                </a>
                                            )}
                                            {anchorRef.current === info9Ref.current && (
                                                <a
                                                    href="https://www.sciencedirect.com/science/article/abs/pii/S002209652100240X"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.captionLink}
                                                >
                                                    <div className={`font-adventuring ${styles.captionOverlay9}`}>
                                                        Source: Journal of Experimental <br />
                                                        Child Psychology
                                                    </div>
                                                </a>
                                            )}
                                            {anchorRef.current === info10Ref.current && (
                                                <a
                                                    href="https://pubmed.ncbi.nlm.nih.gov/2017039/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.captionLink}
                                                >
                                                    <div className={`font-adventuring ${styles.captionOverlay10}`}>
                                                        Source: Journal of Experimental <br />
                                                        Child Psychology
                                                    </div>
                                                </a>
                                            )}
                                            {anchorRef.current === info11Ref.current && (
                                                <a
                                                    href="https://www.researchgate.net/publication/341777573_Multimodal_Learning_Analytics_research_with_young_children_A_systematic_review"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.captionLink}
                                                >
                                                    <div className={`font-adventuring ${styles.captionOverlay11}`}>
                                                        Source: British Journal of <br />
                                                        Educational Technology
                                                    </div>
                                                </a>
                                            )}
                                        </div>
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