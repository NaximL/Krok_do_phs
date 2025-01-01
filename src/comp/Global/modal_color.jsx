import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import M_il from './modal_il';

const M_color = () => {
    useEffect(()=>{
        if (!localStorage.color_vers) {
            localStorage.color = JSON.stringify({
                color1: "rgb(83, 144, 83)" ,
                color2: "rgb(160, 160, 160)" 
         
         
             })
        document.getElementsByClassName("My_modal")[0].style ="display:block"
        document.getElementsByClassName("back")[0].style ="display:block"
        document.body.style.overflow = 'hidden';
        }
      
    },[])
    const [colors, setColors] = useState([
        {
            colors: [
                { color: "rgb(250, 197, 53)" },
                { color: "rgb(224, 128, 42)" },


            ]
        },
        {
            colors: [
                { color: "rgb(167, 220, 87)" },
                { color: "rgb(38, 169, 14)" }
            ]
        },
        {
            colors: [
                { color: "rgb(125, 211, 240)" },
                { color: "rgb(52, 145, 213)" }
            ]
        }
    ]);

    
return (



<div className="My_modal">
<b className="zagl">Виберіть колір</b>



<div className='dw'>
    {colors.map((obj,index)=>(
        <M_il key={index} obj={obj}/>
    ))}



</div>

</div>
    );
};

export default M_color;