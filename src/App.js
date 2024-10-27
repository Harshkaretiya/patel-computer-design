import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/Other/ScrollToTop';
import Product from './components/Product/Product';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductItem from './components/Product/ProductItem';
import ProductView from './components/Product/ProductView';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <div className="bodyContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/productitem" element={<ProductItem />} />
            <Route path="/productview" element={<ProductView />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
