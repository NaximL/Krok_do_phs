import React from "react";


const B2_card = ({text,ico,dop,ok}) => {
    const add_ten = ()=>{
        if (localStorage.progres <= 100 ) {
        localStorage.progres=JSON.parse(localStorage.progres)+10
        }
        
        if (localStorage.progres > 100) {
            localStorage.progres=100;
        }
        ok()
    }
    return ( 
    <div className="B2_card track-visibility">
        <img src={`imgs${ico}`} className="B2_card_img" />
        <b className="B2_card_text">{text}</b>
        <button onClick={add_ten} className="B2_card_butt">Звернутися!</button>
    </div> );
}
 
export default B2_card;