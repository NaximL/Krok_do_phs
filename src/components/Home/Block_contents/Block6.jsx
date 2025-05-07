import imgs from '../../../assets/imgs/kartinka3.png';
import styles from './Blocks.module.css';
const Main_content_B6 = () => {
    return ( 
        <div className={styles.container} >
            <div className={styles.container_row}>
            <img src={imgs} className={`${styles.waf} ${styles.adon}`}/>
            <h1 className={`${styles.title} track-visibility`}>Виклик мобільної бригади 
            <p className={styles.description}>    Функція для виклику мобільної бригади: вона може визначити ваше місцезнаходження за координатами та вулицею, а потім надсилає цю інформацію на сервер. Там автоматично створюється виклик до оператора, і ваші координати самостійно диктуються. Коли з’явиться вільна бригада, до вас прибуде мобільне таксі для переміщення в безпечне місце.
            </p>
            </h1>
            </div>
        </div>
    );
}

export default Main_content_B6;
