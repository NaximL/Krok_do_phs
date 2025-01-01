import React, { useEffect, useRef, useState } from "react";

const Card_butt = ({state,onclk,text}) => {
    const txt = useRef(null)
    const [Direction,SetDirection] = useState('')
    const [re,setf] = useState(text)
    useEffect(()=>{
        if (text==="→") {
            SetDirection("right")
        }  
        else if (text==="←") {
            SetDirection("left")
        }
        if (state === "center") {
            txt.current.style.top = '45%'
            setf("-")
            
        }
        if (state === "hime") {
            setf("🏠")
        }
        
    },[])

    return ( 
    <>  
        <button onClick={onclk} className={`Card_batt ${state} ${Direction}`}><p ref={txt}>{re}</p></button>
    </> );
}
 
export default Card_butt;