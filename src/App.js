import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
