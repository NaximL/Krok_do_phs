import { useEffect,useState } from "react";
import Slider from "../comp/Global/Slider";


const Help_fwa = () => {

    const [modal,Setmodal] = useState(false)
    const [Location,SetLocation] = useState("")
    const [lt,Setlt] = useState("")    
    const [ln,Setln] = useState("")
    const [txt,Settxt] = useState("Допомога")



    const slide = () =>{
        document.querySelector(".dwaf").style.display = "none";
        
        document.querySelector(".fawfwa").style.display = "block";
       
    }




    const change = () =>{
        if (modal) {    
            document.querySelector(".model").style.display = "none";
            document.querySelector(".back").classList.remove("back_active");
            
            
            document.querySelector(".gafw").style = "z-index: 100 !important" ;
            Setmodal(!modal);
        }
        else {
            document.querySelector(".model").style.display = "block";
            document.querySelector(".back").classList.add("back_active")
            document.querySelector(".gafw").style = "z-index: 5 !important";
            Setmodal(!modal);
        }
    }     
    const finall = () =>{
        localStorage.viklik = true;
        document.querySelector(".back").classList.remove("back_active");
        document.querySelector(".hellp").classList.remove("hellpfw");
        document.querySelector(".hides").classList.remove("show");
        document.querySelector(".gafw").style = "z-index: 100 !important";
        Setmodal(false);        
        document.querySelector(".dwaf").style.display = "block";
        document.querySelector(".fawfwa").style.display = "none";

        setTimeout(() => {
  
            Settxt("Допомога викликана");

            document.querySelector(".fwfa").style = "transform: translate(-50%, 30px)";
            
            makeCall('+380665190154', `Call for help at the coordinates: ${ln} ${lt}`);
        }, 1000);
    }

    const change_another_modal = (e) => {
        
        if (e.target.classList.contains('ghiwa') ) {
            return;
        }

        if (modal) {    
            document.querySelector(".back").classList.remove("back_active");
            document.querySelector(".hellp").classList.remove("hellpfw");
            document.querySelector(".hides").classList.remove("show");
            document.querySelector(".gafw").style = "z-index: 100 !important";
            Setmodal(false);
        }
        else {
            document.querySelector(".back").classList.add("back_active");
            document.querySelector(".hellp").classList.add("hellpfw");
            document.querySelector(".gafw").style = "z-index: 5 !important";
            document.querySelector(".hides").classList.add("show")
            
            Setmodal(true);
        }
    };
    const makeCall = async (to, message) => {
        const url = global.url_server; 
        const payload = {
          to,
          message,
        };
      
        try {
          const response = await fetch(`${url}/call`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
      
          if (response.ok) {
            const result = await response.json();
            console.log('Call initiated successfully:', result);
          } else {
            console.error('Failed to initiate call:', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Error while making call:', error);
        }
      };
      
    useEffect(()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            Setlt(latitude);
            Setln(longitude);
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCTHejqbnh2AsvhHrGsRUaFOdUq_3nx7k4`)
            .then((response) => response.json())
            .then((data) => {
              console.log("Адреса:", data.results[1].formatted_address);
              SetLocation(data.results[1].formatted_address)
            })
            .catch((error) => console.error("Помилка отримання адреси:", error)); 
          },
          (error) => {
            console.error("Геолокація недоступна:", error.message);
          }
        );
      } else {
        console.error("Ваш браузер не підтримує геолокацію.");
      }
    },[])
    return ( 
        <>
            <div className="back"></div>
            <div className="model">
                <div className="fwa">
                    <b>Ваші кординати: <br></br> {`Широта: ${lt},`}<br></br> {`Довгота: ${ln}`} </b>
                </div>
                <div className="fwaf">
                    <b>Ваша адреса: <br></br>  {Location} </b>
                </div>
                <button className="gafwf" onClick={change}>Назад</button>
            </div>
            <button className="gafw" onClick={change}>Моє місце знаходження</button>
            <h3 className="fwfa">Виклик допомоги</h3>
            <div className="hellp" onClick={change_another_modal}>


                <p>{txt}</p>
                <div className="hides">
                <h2 className="textd">Ваша адреса: <br></br>  <br></br>{Location}</h2>

                <div className="dwaf">
                <b className="Wfawf">Підтвердіть виклик провівши слайдером</b>
                <Slider func={slide}/>
                </div>

                <button className="fawfwa " onClick={finall}>Підтвердити виклик</button>
</div>

            </div>
        </>
     );
}
 
export default Help_fwa;