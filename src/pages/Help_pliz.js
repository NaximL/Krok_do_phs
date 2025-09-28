import { useEffect, useRef, useState } from "react";
import Slider from "../components/Help/Slider";
import { Link } from "react-router-dom";
import Card_butt from "../comp_card/card_butt_main";
import Modal_info from "../components/Help/Modal_info/Modal_info";
import styles from "../components/Help/Help.module.css"

const Help_fwa = () => {

  const Modals = useRef(null)
  const [modal, Setmodal] = useState(false)
  const [lt, Setlt] = useState("")
  const [ln, Setln] = useState("")
  const [txt, Settxt] = useState("Допомога")



  const slide = () => {
    document.querySelector(".dwaf").style.display = "none";

    document.querySelector(".fawfwa").style.display = "block";

  }




  const change = () => {
    if (modal) {
      Modals.current.style.display = "none";
      document.querySelector(".back").classList.remove("active");


      document.querySelector(".gafw").style = "z-index: 100 !important";
      Setmodal(!modal);
    }
    else {
      Modals.current.style.display = "block"
      document.querySelector(".back").classList.add("active")
      document.querySelector(".gafw").style = "z-index: 5 !important";
      Setmodal(!modal);
    }
  }
  const finall = () => {
    localStorage.viklik = true;
    document.querySelector(".back").classList.remove("back_active");
    document.querySelector(".hellp").classList.remove("hellpfw");
    document.querySelector(".hides").classList.remove("show");
    document.querySelector(".gafw").style = "z-index: 100 !important";
    Setmodal(false);

    setTimeout(() => {

      Settxt("Допомога викликана");

      makeCall('+380665190154', `Call for help at the coordinates: ${ln} ${lt}`);
    }, 1000);
  }

  const change_another_modal = (e) => {

    if (e.target.classList.contains('ghiwa')) {
      return;
    }

    if (modal) {
      document.querySelector(".back").classList.remove("active");
      document.querySelector(".hellp").classList.remove("hellpfw");
      document.querySelector(".hides").classList.remove("show");
      document.querySelector(".gafw").style = "z-index: 100 !important";
      Setmodal(false);
    }
    else {
      document.querySelector(".back").classList.add("active");
      document.querySelector(".hellp").classList.add("hellpfw");
      document.querySelector(".gafw").style = "z-index: 5 !important";
      document.querySelector(".hides").classList.add("show")

      Setmodal(true);
    }
  };
  const makeCall = async (to, message) => {
    // const url = global.url_server;
    // const payload = {
    //   to,
    //   message,
    // };

    // try {
    //   const response = await fetch(`${url}/call`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(payload),
    //   });

    //   if (response.ok) {
    //     const result = await response.json();
    //   } else {
    //     console.error('Failed to initiate call:', response.status, response.statusText);
    //   }
    alert("Тимчасово недоступно")
    // } catch (error) {
    //   console.error('Error while making call:', error);
    // }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          Setlt(latitude);
          Setln(longitude);
        })
    }
    else {
      console.error("Ваш браузер не підтримує геолокацію.");
    }
  }, [])
  return (
    <div className="wag">
      <div className="back"></div>


      <Link to={'/'}>
        <Card_butt
          text={"←"}
          state={"ana"}
        />
      </Link>


      <Modal_info
        ModalRef={Modals}
        change={change}
        lt={lt}
        ln={ln}
      />


      <button className="gafw" onClick={change}>Моє місце знаходження</button>


      <div className="hellp" onClick={change_another_modal}>
        <p>{txt}</p>
        <div className="hides">
          <h2 className={styles.containers}>
            <div className="fwa">
              <b>Ваші кординати: <br></br> {`Широта: ${lt},`}<br></br> {`Довгота: ${ln}`} </b>
            </div>


          </h2>

          <div className="dwaf">
            <b className={styles.Slider_text}>Підтвердіть виклик провівши слайдером</b>
            <Slider func={slide} />
          </div>

          <button className="fawfwa " onClick={finall}>Підтвердити виклик</button>
        </div>

      </div>
    </div>
  );
}

export default Help_fwa;