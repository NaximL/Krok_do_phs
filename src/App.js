import { useEffect } from "react";
import Navigatosr from "./Navigator";
import "./assets/styles/style.css"

function App() {

global.url = `https://644ab0e4a8370fb32155be44.mockapi.io/krok`
global.url_server = "https://serverdf-5c9c8eec8694.herokuapp.com"
//https://serverdf-5c9c8eec8694.herokuapp.com
useEffect(()=>{ 
  const updateColors = () => {
    if (localStorage.color) {
        document.documentElement.style.setProperty('--global_c1', JSON.parse(localStorage.color).color1);
        document.documentElement.style.setProperty('--global_c2', JSON.parse(localStorage.color).color2);
    }
};
updateColors();

},[])
  return(
    <Navigatosr/>
  );
}

export default App;