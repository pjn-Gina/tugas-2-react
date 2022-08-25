import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Artis from './pages/Artis/Artis';

function App() {
  return (
    <>
    <form>
        <h1>List Artis</h1>
        <li><Link to="/artis/andre-taulani"> Andre Taulani </Link></li>
        <li><Link to="/artis/cak-lontong"> Cak Lontong </Link></li>
        <li><Link to="/artis/ayu-tingting"> Ayu Ting Ting </Link></li>
        <li><Link to="/artis/kiki-saputri"> Kiki Saputri </Link></li>
        <li><Link to="/artis/hesti-purwadinata"> Hesti Purwadinata </Link></li>
        <li><Link to="/artis/prilly-latuconsina"> Prilly Latuconsina </Link></li>
        <li><Link to="/artis/chelsea-islan"> Chelsea Islan </Link></li>
        <li><Link to="/artis/deva-mahendra"> Deva Mahendra </Link></li>
        <li><Link to="/artis/sophia-latjuba"> Sophia Latjuba </Link></li>
        <li><Link to="/artis/dwi-sasono"> Dwi Sasono </Link></li>
        <li><Link to="/artis/putri-marino"> Putri Marino </Link></li>
        <li><Link to="/artis/reza-rahardian"> Reza Rahardian </Link></li>

       
      </form>
    
    <Routes>
      <Route path='/artis/:nama' element={<Artis/>} />
    </Routes>
    </>
  );
}

export default App;
