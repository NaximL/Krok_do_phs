import B2_card from "./components/Card_block";
import nasl2 from "../../../../assets/imgs/nasl2.png";
import psih from "../../../../assets/imgs/psih.png";
import platch from "../../../../assets/imgs/platch.png";
import stres from "../../../../assets/imgs/stres.png";
import depresion from "../../../../assets/imgs/depresion.png";
import styles from "./Card.module.css";


const Main_content_B2 = ({children,onsub}) => {
    const datas = [
        {
            text: "Домашнє насильство - Причина звернутися",
            ico: nasl2
        },
        {
            text: `Потребуєш допомоги психолога?-\n Причина звернутися`,
            ico: psih
        },
        {
            text: "Підтримка після втрати - Причина звернутися",
            ico: platch
        },
        {
            text: "Тривога і стрес - Причина звернутися",
            ico: stres
        },
        {
            text: "Допомога при депресії - Причина звернутися",
            ico: depresion
        }
    ];
    return ( 
    <div className={styles.B2_cont_card}>
    {datas.map((data,index)=>(
        <B2_card ok={onsub} key={index} text={data.text} ico={data.ico}/>
    ))}
    </div> );
}
 
export default Main_content_B2;