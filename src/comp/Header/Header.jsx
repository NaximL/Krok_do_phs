import Avata from "./Avata";
import R_card from "./Rada_cart";
import { useState,useEffect } from "react";
import Progres from "./Progras_psih";
import Guide from "../B1/Guide";
import Nav_gaw from "./Navigat";
import Taxets from "./Taxes";
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
        <div className="Headers track-visibility">
            <div style={{display:"none"}}>
            <Progres value={progress}/>
        
            <Guide text={"<---Прогрес дослідження "} style={"g2"}/>
            </div>
            <Avata/>
            <Taxets/>
        </div>
     );
}
 
export default Header;