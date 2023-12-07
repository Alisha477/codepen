import logo from './logo.svg';
import './App.css';
import Landpage from './components/Landpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contactus from './components/Contactus';
import About from './components/About';
import Technews from './components/Technews';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landpage/>}></Route>
        <Route path='/technews' element={<Technews/>}></Route>
        <Route path='/contactus' element={<Contactus/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
