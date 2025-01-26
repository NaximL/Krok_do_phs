import { useEffect, useState } from "react";
import Htd from "../comp_chc/htdd";

async function get(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(response.status);
            throw new Error(response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
}


const Card_chc = () => {


    const [Lst,setLst] = useState([])
    useEffect(()=>{
        get(global.url).then((data) => {
            setLst(data);
            console.log(data)
        })
    },[])


    return (
    
        <>
    
            <h1 className="xag">Виберіть картку</h1>
            <div className="ggd">
            {Lst.map((obj,key)=>(
                <Htd key={key} obj={obj}/>
            ))}
            </div>
        </>
     );
}
 
export default Card_chc;