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
import Query from './components/Form/Query';
import { useState } from 'react';

function App() {

  const [categoryId,setCategoryId] = useState(null);
  const [product,setProduct] = useState(null);

  const setCategoryIdData = (id) =>{
    setCategoryId(id)
    console.log(id);
  }
  const setProductData = (id) =>{
    setProduct(id)
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <div className="bodyContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product onClick={setCategoryIdData}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/query" element={<Query />} />
            <Route path="/productitem" element={<ProductItem categoryId={categoryId} onClicked={setProductData} /> } />
            <Route path="/productview" element={<ProductView product={product}/>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
