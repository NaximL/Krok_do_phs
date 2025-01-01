import Avata from "./Avata";
import R_card from "./Rada_cart";
import { useState,useEffect } from "react";
import Progres from "./Progras_psih";
import Guide from "../B1/Guide";
const Header = () => {
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
        <div className="Headers">
            <Progres value={progress}/>

            <Guide text={"<---Прогрес дослідження "} style={"g2"}/>
            <Avata/>
        </div>
     );
}
 
export default Header;