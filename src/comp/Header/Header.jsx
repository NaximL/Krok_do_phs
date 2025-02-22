import Avata from "./Wfa";
import R_card from "./Rada_cart";
import { useState,useEffect } from "react";
import Progres from "./Progras_psih";
import Guide from "../B1/Guide";
import Nav_gaw from "./Navigat";
import Wfa from "./Wfa";
const Header = ({awf}) => {
    const [progress, setProgress] = useState(0);

    useEffect(()=>{
        let i = 0
        let d =setInterval(()=>{
            i++
            setProgress(i);
            if (i>=localStorage.progres) {
                clearInterval(d)
            }
        },70)
        
    
}, []);
    return ( 
        <div className="Headers track-visibility">
            <div style={{display:"none"}}>
            <Progres value={progress}/>
        
            <Guide text={"<---Прогрес дослідження "} style={"g2"}/>
            </div>
            <div onClick={awf} className="fawg"><b>Меню</b></div>
            <Wfa src={"/card_chc"} clas={"Avatar"} text={"Кімната ментального здоров‘я"}/>
            <Wfa src={"/help"} clas={"Tazers"} text={"Термінова допомога"}/>
            <Wfa src={"https://t.me/Mind_Haven_bot"} clas={"T_botd"} text={"Телеграм бот"} />
      
      
        </div>
     );
}
 
export default Header;