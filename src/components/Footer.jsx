import bottom from "../assets/webp/footer2.webp";
import styles from "./Footer.module.css";

function Footer() {
    return (

        <div className={styles.footerMain}>
            <div className={styles.footerBgWrapper}>
                <img src={bottom} alt="footerimg" className={styles.footerBg} />
            </div>
            <div className={styles.footerLinks}>
                <button>Home</button>
                <button>Explore More</button>
                <button>Blogs</button>
                <button>Stories</button>
                <button>Newsletters</button>
                <button>Explore more</button>
            </div>
        </div>

    );
}

export default Footer;
