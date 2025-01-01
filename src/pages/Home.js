import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../comp/Nav_bar/nav_bar';
import Block_m from '../comp/Global/block_tiitle';
import TypingTexts from '../comp/Help_comps/typedtext';
import Header from '../comp/Header/Header';
import B2_card from '../comp/B2/Card_block';
import B2_cont_card from '../comp/B2/Card_conteiner';
import Main_content_B3 from '../comp/B3/B3_Main';
import MAN from "../imgs/MAN.png"
import M_color from '../comp/Global/modal_color';
import MoadReg from '../comp/Global/moad';


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


const Home = () => {
    const [zvern, setZvern] = React.useState(false);

    const open = ()=>{
        let dw = document.getElementById("b1");
        dw.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setZvern(true);
    }
    const closef =() =>{
        setZvern(false); 
    }
    useEffect(()=>{

        if (!localStorage.progres) {
            localStorage.progres = 0
        }

        setInterval(()=>{
            document.documentElement.style.setProperty('--global_c1', JSON.parse(localStorage.color).color1);

            document.documentElement.style.setProperty('--global_c2', JSON.parse(localStorage.color).color2);


        },1)

        get(global.url).then((data)=>{
            console.log(data);
            setTimeout(() => {
            document.getElementsByClassName("Nasl_Head")[0].style = "transform:translate(0px,50px)"
                
            }, 1000);
        })
    },[])
    
    
    return (  
        <>
            <M_color/>
            <div className='back'></div>
            
            <Header/>
            <Navbar/>   
            <MoadReg o={closef} state={zvern}/>
            <Block_m id={1}>
                
                <div className='Head'>

                <TypingTexts text={"Потрібна підтримка? Ми тут, щоб тебе вислухати."} time={100} />
                <p className='Nasl_Head'>Про таке не мовчать</p>
            
                </div>
            </Block_m>

            <Block_m hide={"hide"} id={2}>

                <B2_cont_card onsub={open}/>
            </Block_m>

            <Block_m  hide={"hide"} id={3}>

                <Main_content_B3/>

            </Block_m>
           
            
        </>
    );
}
 
export default Home;