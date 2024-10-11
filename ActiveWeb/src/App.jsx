import "./App.css";
import Header from "./components/Header";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import About from "./pages/About";
import Teams from "./pages/Teams";
function App() {
  useEffect(() => {
    AOS.init({
        duration: 2500, 
    });
}, []);
  return (
    <>
      <Header></Header>
     
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
         <Route path="/team" element={<Teams/>} />
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
