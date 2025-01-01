import { useEffect } from "react";


const Guide = ({text,style}) => {
    useEffect(()=>{
        setTimeout(()=>{
const g = document.querySelectorAll('.Guide');

g.forEach((el) => {
    el.style = "opacity:0"
});
        },3500)
    })
    return ( 
        <p className="Guide" id={style}>{text}</p>
     );
}
 
export default Guide;