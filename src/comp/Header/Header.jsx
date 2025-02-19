import Avata from "./Wfa";
import R_card from "./Rada_cart";
import { useState,useEffect } from "react";
import Progres from "./Progras_psih";
import Guide from "../B1/Guide";
import Nav_gaw from "./Navigat";
import Wfa from "./Wfa";
const Header = () => {
    const [progress, setProgress] = useState(0);
    const [open, setOpen] = useState(false);
    const awf = ()=>{
        if (open) {
        document.getElementsByClassName("Avatar")[0].style = "transform:translate(-50%,-500%)"
        document.getElementsByClassName("Tazers")[0].style = "transform:translate(-50%,-500%)"
        document.getElementsByClassName("T_botd")[0].style = "transform:translate(-50%,-500%)"
        document.getElementsByClassName("fawg")[0].style = "transform:translate(-50%,20px)"
        document.getElementsByClassName("back")[0].style = "display:none";
        document.getElementsByClassName("back")[0].classList.remove("active");
        document.getElementsByClassName("back")[0].style = "z-index:100";
        setOpen(!open);
        }
        else{
        document.getElementsByClassName("Avatar")[0].style = "transform:translate(-50%,10px)"
        document.getElementsByClassName("Tazers")[0].style = "transform:translate(-50%,10px)"
        document.getElementsByClassName("T_botd")[0].style = "transform:translate(-50%,10px)"
        document.getElementsByClassName("fawg")[0].style = "transform:translate(-50%,150px)"
        document.getElementsByClassName("back")[0].style = "display:block";
        document.getElementsByClassName("back")[0].classList.add("active");
        document.getElementsByClassName("back")[0].style = "z-index:99";
            setOpen(!open);
        }

    }

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
            <Wfa src={"/card_chc"} clas={"Avatar"} text={"Картки"}/>
            <Wfa src={"/help"} clas={"Tazers"} text={"Термінова допомога"}/>
            <Wfa src={"https://t.me/Painosnsbot"} clas={"T_botd"} text={"Телеграм бот"} />
      
      
        </div>
     );
}
 
export default Header;