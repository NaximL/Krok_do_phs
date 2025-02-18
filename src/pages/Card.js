import Card_butt from "../comp_card/card_butt_main";
import Card_m from "../comp_card/card_main";
import React, { useEffect, useState } from "react";
import G_text from "../comp_card/golov_text";
import G_img from "../comp_card/img_g";
import N_text from "../comp_card/nornal_text";
import B_text from "../comp_card/bottom_text";
import Load from "../comp_card/Loading";
import { useParams } from "react-router-dom";

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

const Card = ({test}) => {
    const { tema, id } = useParams();
    const [Card, setCard] = useState({});
    const [load, setLoad] = useState(false);

    const [R, setR] = useState({});
    const [rightd, setRight] = useState("right");
    const [leftd, setLeft] = useState("left");


    const ex = () => {
        if (Number(id) === 1) {
            document.getElementsByClassName("Card_batt")[0].style = "background-color: #c50000"
            setTimeout(()=>{
            document.getElementsByClassName("Card_batt")[0].style = "background-color: rgb(104, 166, 205);"

            },700)
        }
        else {
            setTimeout(() => {
                document.location.href = `/card/${tema}/${Number(id) - 1}`;
            }, 200);
        }
    };

    const next = () => {
        if (!R) {                   
            
            setTimeout(()=>{
            if (window.self== window.top) {
            document.location.href = '/'; 
            }
            else {
                document.location.href = `/card/${tema}/${Number(id) - 1}`;
            }
            },700)
        }
        else {
        setTimeout(() => {
            document.location.href = `/card/${tema}/${Number(id) + 1}`;
        }, 200);
        }

    };

    useEffect(() => {   
        if (Number(id) === 1) {
            setLeft("center")
            
        }



            get(global.url).then((data) => {
            const fww = data.find(o => o.tema === tema);
            if (fww) {
                const kord = fww.kroki.find(ofw => ofw.krok === Number(id));
                const f = fww.kroki.find(ofw => ofw.krok === Number(id)+1);
                if (!f) {
                    setRight("hime")
                    setR(f)
                    
                }
                if (kord) {
                    setCard(kord);
                    setLoad(true);
                } else {
                    alert("Не вірно введено номер кроку");
                    document.location.href = "/";
                }
            } else {
                alert("Не вірно введена тема картки");
                document.location.href = "/";
            }
        });   
        
     

      
        
    }, []);

    return (
        <>
            {!load && <Load />}
            <div className={`ff ${load ? "vis" : ""}`}>
                {load && (
                    <Card_m>
                        <G_img img={Card.img}>
                            <G_text text={Card.golov_text}>
                                <N_text text={Card.text} />
                            </G_text>
                        </G_img>
                        <B_text krok={Card.krok} />
                        <Card_butt onclk={ex} state={leftd} text={"←"}/>
                        <Card_butt onclk={next} state={rightd} text={"→"}/>
                    </Card_m>
                )}
            </div>
        </>
    );
};

export default Card;