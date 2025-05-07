import React from "react";
import styles from "../Card.module.css";

const B2_card = ({text, ico, ok}) => {
    return ( 
    <div className={`${styles.B2_card} track-visibility`}>
        <img src={ico} className={styles.B2_card_img} />
        <b className={styles.B2_card_text}>{text}</b>
        <button onClick={ok} className={styles.B2_card_butt}>Звернутися!</button>
    </div> 
    );
}
 
export default B2_card;
