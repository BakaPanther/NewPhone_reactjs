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
import Authen_Regis from './components/authentic-registration';
import ResetPassword from './components/reset-password';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const location=useLocation();
  const isIndexPage= location.pathname === '/';
  const isLoginPage= location.pathname ==='/login';
  const isResetPage= location.pathname === '/reset-password';
  const isAuthenPage= location.pathname ==='/authen';
  return (
    <>
    <div className='App'>
    {/* {isLoginPage||isResetPage ? <></> : isIndexPage ? <Header/> : isAuthenPage ? <></> : <NocateHeader/>} */}

    
    <Routes>
      <Route path='/authen' element={<Authen_Regis/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/reset-password' element={<ResetPassword/>}/>
      <Route path='/' element={<Index/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/product' element={<ProductContainer/>}/>
      <Route path='/product-details/:id' element={<ProductDetails/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
    </Routes> 
    <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
        {/* Same as */}
    <ToastContainer />
    </div>
    </>
  );
}

export default App;
