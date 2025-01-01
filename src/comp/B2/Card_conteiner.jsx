import B2_card from "./Card_block";


const B2_cont_card = ({children,onsub}) => {
    const datas = [
        {
            text: "Домашнє насильство - Причина звернутися",
            ico: "/nasl2.png"
        },
        {
            text: "Потреба в психологу - Причина звернутися",
            ico: "/psih.png"
        },
        {
            text: "Підтримка після втрати - Причина звернутися",
            ico: "/platch.png"
        },
        {
            text: "Тривога і стрес - Причина звернутися",
            ico: "/stres.png"
        },
        {
            text: "Допомога при депресії - Причина звернутися",
            ico: "/depresion.png"
        }
    ];
    return ( 
    <div className="B2_cont_card">
    {datas.map((data,index)=>(
        <B2_card ok={onsub} key={index} text={data.text} ico={data.ico}/>
    ))}
    </div> );
}
 
export default B2_cont_card;