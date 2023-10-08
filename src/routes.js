import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import Help from './pages/Help';
//import Footer from './components/Footer';


function RoutesApp() {
    return (
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Help" element={<Help/>} />
        </Routes>
        
        </BrowserRouter>
    )
}

export default RoutesApp;