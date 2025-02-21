import Wfa from '../Header/Wfa';


const Main_content_B4 = ({onsub}) => {
    const images = [
        {   
          original:"imgs/ditina1.png"  ,
          thumbnail: "imgs/ditina1.png" , 
        },
        {   
          original: "imgs/ditina2.png" ,
          thumbnail: "imgs/ditina2.png" , 
        },
        {   
          original: "imgs/ditina3.png" ,
          thumbnail: "imgs/ditina3.png" , 
        },
    ];

    return ( 
        <div className='GAwg'>
            <img src="imgs/ditina1.png" className='waf'/>
            <h1 className='track-visibility faw'>Притулок для жінок <p>  Притулок для жінок «Світло надії» з 2017 року допомагає жінкам, що постраждали від домашнього та гендерно зумовленого насильства захиститись від кривдників та почати нове життя. Для цього ми надаємо комплексні послуги з тимчасового проживання, психологічну та правову допомогу, а також консультуємо жінок, які цього потребують.</p></h1>
            <div onClick={onsub}><Wfa src={"/"} clas={"fwafw"} text={"Потрібна допомога"}/></div>
        </div>
    );
}

export default Main_content_B4;