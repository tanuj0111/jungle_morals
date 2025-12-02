import mountain from "../assets/SVG/Asset 21.svg";
import board from "../assets/SVG/board.svg"
import styles from "./Mountain.module.css";
export default function Mountain(){
    return(
        <>
          <img src={mountain} alt="Mountain" className={styles.mountain} />
      <div className={styles.boardContainer}>
        <img src={board} alt="board" className={styles.board} />
        <div className={styles.boardText}>
          <p>For Kids' Joy, and Parents' Peace of Mind</p>
        </div>
      </div>
        </>
    )
}