import styles from './HelloPromo.module.css';
import TypingTexts from '../../Help_comps/typedtext';
import psih from "../../../assets/imgs/startup.png";
import imgs from "../../../assets/imgs/fon_gori.webp"
const HelloPromo = () => {
    return (
        <>  
            <img className={styles.BackgroundImage} src={imgs} />
            <section className={styles.HelloPromo}>

                <div className={styles.HelloPromo__container_row} >
                    <div className={`track-visibility ${styles.text_container}`}>
                        <TypingTexts text={"Потрібна підтримка? Ми тут, щоб тебе вислухати."} time={100} />
                    </div>
                        <img alt='wad' src={psih} />
                
                </div>
            </section>
        </>
    );
}

export default HelloPromo;