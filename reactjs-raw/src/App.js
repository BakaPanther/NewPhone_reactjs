import './vendor/css/bootstrap.css';
import './vendor/css/magnific-popup.min.css';
import './vendor/css/font-awesome.css';
import './vendor/css/jquery.fancybox.min.css';
import './vendor/css/themify-icons.css';
import './vendor/css/niceselect.css';
import './vendor/css/animate.css';
import './vendor/css/flex-slider.min.css';
import './vendor/css/owl-carousel.css';
import './vendor/css/slicknav.min.css';
import './vendor/css/reset.css';
import './vendor/css/responsive.css';
import './App.css';

import { Route, Routes, useLocation } from 'react-router-dom';
import { Index } from './components';
import { Cart } from './components/pages/cart/cart';
import { ProductContainer } from './components/pages/product/product-container';
import { useEffect, useState } from 'react';
import Header from './components/header';
import { NocateHeader } from './components/nocate-header';
import { CheckOut } from './components/pages/checkout/checkout';
import { Contact } from './components/pages/contact-us/contact';
import Login from './components/login';
import ProductDetails from './components/pages/product-detail/product-details';

function App() {
  const location=useLocation();
  const isIndexPage= location.pathname === '/';
  const isLoginPage= location.pathname ==='/login';
  // const [sticky,setSticky]= useState(false);
  // useEffect(()=>{
  //   document.addEventListener("scroll",checkScroll);
  //   return () => document.removeEventListener("scroll", checkScroll);
  // },[]);
  // const checkScroll=(e)=>{
  //   const bar=document.getElementById("myHeader");
  //   console.log(window.scrollY,bar.offsetTop);
  //   console.log(sticky);
  //   if(window.scrollY>=bar.offsetTop){
  //     setSticky(true);
  //   }else{
  //     setSticky(false);
  //   }
  // };
  return (
    <>
    <div className='App'>

      {isLoginPage? <></>:isIndexPage ? <Header/>:<NocateHeader/>}
    
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Index/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/product' element={<ProductContainer/>}/>
      <Route path='/product-details' element={<ProductDetails/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
    </Routes> 
    </div>
    </>
  );
}

export default App;
