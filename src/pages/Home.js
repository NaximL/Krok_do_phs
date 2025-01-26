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
        
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); 
  
  const elements = document.querySelectorAll('.track-visibility');
  
  elements.forEach(element => {
    observer.observe(element);
  });

        if (!localStorage.progres) {
            localStorage.progres = 0
        }

        

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

                <div className='track-visibility awf'><TypingTexts text={"Потрібна підтримка? Ми тут, щоб тебе вислухати."} time={100} /></div>
                <p className='Nasl_Head track-visibility awf'>Про таке не мовчать</p>
       
                </div>
            </Block_m>

            <Block_m hide={"hide"} id={2}>

                <B2_cont_card onsub={open}/>
            </Block_m>

            <Block_m  hide={"hide"} id={3}>

                <Main_content_B3/>

            </Block_m>
          
            <Block_m  hide={"hide"} id={4}>


            </Block_m>
            
            
        </>
    );
}
 
export default Home;