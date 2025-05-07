import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Card from "./pages/Card"
import Card_chc from './pages/Card_choice';
import Help_fwa from './pages/Help_pliz';

function Navigatosr() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Home />} /> 
        <Route path='/card/:tema/:id' element={<Card />} /> 
        <Route path='/card_chc' element={<Card_chc />} /> 
        <Route path='/help' element={<Help_fwa />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default Navigatosr;
