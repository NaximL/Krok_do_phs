import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Card from "./pages/Card"
import Card_chc from './pages/Card_choice';
function Navigatosr() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Home />} /> 
        <Route path='/card/:tema/:id' element={<Card />} /> 
        <Route path='/card_chc' element={<Card_chc />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default Navigatosr;
