import bottom from "../assets/SVG/bottom.svg";
import styles from "./Footer.module.css";

function Footer() {
    return (

        <div className={styles.footerMain}>
            <div className={styles.footerBgWrapper}>
                <img src={bottom} className={styles.footerBg} />
            </div>
            <div className={styles.footerLinks}>
                <button>Home</button>
                <button>Explore More</button>
                <button>Blogs</button>
                <button>Stories</button>
                <button>Newsletters</button>
            </div>
        </div>

    );
}

export default Footer;
