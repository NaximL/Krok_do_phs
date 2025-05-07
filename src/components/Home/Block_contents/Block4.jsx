import ditinaImage from '../../../assets/imgs/ditina1.png';
import styles from './Blocks.module.css';



const Main_content_B4 = ({onsub}) => {

    return ( 
        <div className={styles.container}>
        <div className={styles.container_row}>
            <img src={ditinaImage} className={styles.image} />
            <h1 className={`${styles.title} track-visibility`}>Притулок для жінок 
                <p className={styles.description}>Притулок для жінок «Світло надії» з 2017 року допомагає жінкам, що постраждали від домашнього та гендерно зумовленого насильства захиститись від кривдників та почати нове життя. Для цього ми надаємо комплексні послуги з тимчасового проживання, психологічну та правову допомогу, а також консультуємо жінок, які цього потребують.</p>
            </h1>
        </div>
        </div>
    );
}

export default Main_content_B4;