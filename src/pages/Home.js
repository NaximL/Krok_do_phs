import {useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../comp/Nav_bar/nav_bar';
import Block_m from '../comp/Global/block_tiitle';
import TypingTexts from '../comp/Help_comps/typedtext';
import Header from '../comp/Header/Header';
import B2_card from '../comp/B2/Card_block';
import B2_cont_card from '../comp/B2/Card_conteiner';
import Main_content_B3 from '../comp/B3/B3_Main';
import MoadReg from '../comp/Global/moad';
import Loading from '../comp/Global/Loading';
import Main_content_B4 from '../comp/B4/cariis';
import Main_content_B5 from '../comp/B5/content';
import Main_content_B6 from '../comp/B6/content';


const Home = () => {
    const [zvern, setZvern] = useState(false);
    const [Load, setLoad] = useState(false);
    const [Clck, setClck] = useState(false);
    const [opens, setOpen] = useState(false);
    

    const open = () => {
        let dw = document.getElementById("b1");
        if (dw) {
            dw.scrollIntoView({ behavior: 'smooth' });
        }
        setZvern(true);
    };
    const awf = ()=>{
        if (opens) {
        document.getElementsByClassName("Avatar")[0].style = "transform:translate(-50%,-500%)"
        document.getElementsByClassName("Tazers")[0].style = "transform:translate(-50%,-500%)"
        document.getElementsByClassName("T_botd")[0].style = "transform:translate(-50%,-500%)"
        document.getElementsByClassName("fawg")[0].style = "transform:translate(-50%,20px)"
        document.getElementsByClassName("back")[0].style = "display:none";
        document.getElementsByClassName("back")[0].classList.remove("active");
        document.getElementsByClassName("back")[0].style = "z-index:100";        
        setClck(null);
        setOpen(!opens);
        }
        else{
        document.getElementsByClassName("Avatar")[0].style = "transform:translate(-50%,10px)"
        document.getElementsByClassName("Tazers")[0].style = "transform:translate(-50%,10px)"
        document.getElementsByClassName("T_botd")[0].style = "transform:translate(-50%,10px)"
        document.getElementsByClassName("fawg")[0].style = "transform:translate(-50%,150px)"
        document.getElementsByClassName("back")[0].style = "display:block";
        document.getElementsByClassName("back")[0].classList.add("active");
        document.getElementsByClassName("back")[0].style = "z-index:99";
        setClck(true);
            setOpen(!opens);
        }

    }
    const closef = () => {
        setZvern(false);
    };

    useEffect(() => {
        localStorage.color = JSON.stringify({
            color1:"rgb(125, 211, 240)",
            color2:"rgb(52, 145, 213)",
        })



        const initObserver = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });

            const elements = document.querySelectorAll('.track-visibility');
            elements.forEach(element => observer.observe(element));
        };

        const handleLoad = () => {
            setLoad(true);
            initObserver(); 
        };

        if (document.readyState === "complete") {
            handleLoad(); 
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    useEffect(() => {
        if (Load) {
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });

            const elements = document.querySelectorAll('.track-visibility');
            elements.forEach(element => observer.observe(element));
        }
    }, [Load]);

    return (
        <>
            {Load ? (
                <>
                    <div onClick={Clck ? awf : null} className='back'></div>

                    <Header awf={awf}/>
                    <Navbar />
                    <MoadReg o={closef} state={zvern} />
                    <div className='blocks'>
                        
                    <Block_m id={1}>
                        <div className='Head'>
                            <div className='track-visibility awf'>
                                <TypingTexts text={"Потрібна підтримка? Ми тут, щоб тебе вислухати."} time={100} />
                            </div>
                        </div>
                    </Block_m>

                    <Block_m hide={"hide"} id={2}>
                        <B2_cont_card onsub={open} />
                    </Block_m>

                    <Block_m hide={"hide"} id={3}>
                        <Main_content_B3 />
                    </Block_m>
                    <Block_m hide={"hide"} id={4}>
                        <Main_content_B4  onsub={open}/>
                    </Block_m>   
                    <Block_m hide={"hide"} id={5}>
                        <Main_content_B5/>
                    </Block_m>
                    <Block_m hide={"hide"} id={6}>
                        <Main_content_B6/>
                    </Block_m>
                    </div>
                </>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default Home;