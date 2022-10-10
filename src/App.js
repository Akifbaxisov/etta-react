import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Blog from './components/blog/Blog'
import Home from './components/home/Home';
import ProductDetail from './components/productdetail/ProductDetail';
import Products from './components/products/Products';
import ScrollToTop from './ScrollToTop';
import BlogDetail from './components/blog/blogdetail/BlogDetail';
import About from './components/footer/footernav/About';
import Contact from './components/footer/footernav/Contact';
import Delivery from './components/footer/footernav/Delivery';
import Refund from './components/footer/footernav/Refund';
import CardPage from './components/cardpage/CardPage';
import CheckOutPage from './components/checkout/CheckOutPage';


function App() {
  return (
   <>
        <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route exact path='/blog' element={<Blog />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path='/products' element={<Products />} />
            <Route exact path='/productdetail' element={<ProductDetail />} />
            <Route exact path='/blogdetail' element={<BlogDetail />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/delivery' element={<Delivery />} />
            <Route exact path='/refund' element={<Refund />} />
            <Route exact path='/cardpage' element ={<CardPage/>} />
            <Route exact path='/checkout' element={<CheckOutPage />} />
          </Routes>
        </BrowserRouter>
   </>
  );
}

export default App;
