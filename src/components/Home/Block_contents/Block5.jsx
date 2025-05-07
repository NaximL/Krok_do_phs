import ditinaImage from '../../../assets/imgs/ditina2.png';
import styles from './Blocks.module.css';

const Main_content_B5 = () => {
    return ( 
        <div className={styles.container} >

            <div className={styles.container_row}>
            <img src={ditinaImage} className={styles.image}/>
            <h1 className={`${styles.title} track-visibility`}>Головна мета притулку для жінок
            <p className={styles.description}>Це реінтеграція жінок та їхніх дітей до повноцінного і щасливого життя. Саме тому на базі Притулку фахівці «Світло надії» надають такі послуги:</p>
            <ul>
                <li>тимчасове проживання</li>
                <li>соціально побутові послуги</li>
                <li>консультування</li>
                <li>послуги психолога</li>
                <li>медико профілактичні послуги</li>
                <li>соціальний супровід</li>
                <li>освітні послуги</li>
            </ul></h1>
            </div>
        </div>
    );
}

export default Main_content_B5;
