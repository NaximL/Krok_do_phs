import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import Loading from '../components/Help_comps/Loading';
import MoadReg from '../components/Home/Modal/Modal';

import Block from '../components/Home/Block_contents/Block';
import Main_content_B2 from '../components/Home/Block_contents/Block2/Card_conteiner';
import Main_content_B3 from '../components/Home/Block_contents/Block3';
import Main_content_B4 from '../components/Home/Block_contents/Block4';
import Main_content_B5 from '../components/Home/Block_contents/Block5';
import Main_content_B6 from '../components/Home/Block_contents/Block6';

import HelloPromo from '../components/Home/Hello_promo/HelloPromo';
import HeaderNav from '../components/Home/Header_navigation/HeaderNav';

     
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

    const awf = () => {
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
        else {
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
            color1: "rgb(125, 211, 240)",
            color2: "rgb(52, 145, 213)",
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
                    <HeaderNav/>
                    <MoadReg o={closef} state={zvern} />
                    <div className='blocks'>

                        <Block id={1}>
                            <HelloPromo/>       
                        </Block>

                        <Block hide={"hide"} id={2}>
                            <Main_content_B2 onsub={open} />
                        </Block>

                        <Block hide={"hide"} id={3}>
                            <Main_content_B3 />
                        </Block>
                        <Block hide={"hide"} id={4}>
                            <Main_content_B4 onsub={open} />
                        </Block>
                        <Block hide={"hide"} id={5}>
                            <Main_content_B5 />
                        </Block>
                        <Block hide={"hide"} id={6}>
                            <Main_content_B6 />
                        </Block>
                    </div>
                </>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default Home;