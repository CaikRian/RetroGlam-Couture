import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import DescrProd from './components/DescrProd';
import About from './pages/About';
import Help from './pages/Help';
import CatFem from './pages/CatFem';
import CatMasc from './pages/CatMasc';
import CatChild from './pages/CatChild';
import FormLogin from './pages/FormLogin';
import FormCad from './pages/FormCad';
//import Footer from './components/Footer';


function RoutesApp() {
    return (
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Help" element={<Help/>} />
            <Route path="/CatFem" element={<CatFem/>} />
            <Route path="/CatMasc" element={<CatMasc/>} />
            <Route path="/CatChild" element={<CatChild/>} />
            <Route path="/FormLogin" element={<FormLogin/>} />
            <Route path="/FormCad" element={<FormCad/>} />
            <Route path="/DescrProd/:nomeProduto/:valorParcelado/:valorTotal/:imgProd" element={<DescrProd/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default RoutesApp;