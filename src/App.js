import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/Other/ScrollToTop';
import Product from './components/Product/Product';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ProductItem from './components/Product/ProductItem';
import ProductView from './components/Product/ProductView';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Query from './components/Form/Query';
import { useState } from 'react';
import AdminHome from './components/Admin/AdminHome/AdminHome';

function App() {
  const [categoryId, setCategoryId] = useState(null);
  const [product, setProduct] = useState(null);

  const setCategoryIdData = (id) => {
    setCategoryId(id);
    console.log(id);
  };
  
  const setProductData = (id) => {
    setProduct(id);
  };

  return (
    <BrowserRouter>
      <MainContent 
      />
    </BrowserRouter>
  );
}

function MainContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <ScrollToTop />
      <div className="bodyContainer">
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/query" element={<Query />} />
          <Route path="/productitem/:categoryId" element={<ProductItem />} />
          <Route path="/productview/:productId" element={<ProductView  />} />
          <Route path="/admin/*" element={<AdminHome />} />
        </Routes>
      </div>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
