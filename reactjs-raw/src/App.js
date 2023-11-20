import './App.css';
import './vendor/css/bootstrap.min.css';
import Header from './components/header';
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
import Footer from './components/footer';
import SliderArea from './components/pages/slider-area';
import SmBannerSection from './components/pages/small-banner-section';
import ProductArea from './components/pages/product-area';
import MeBanner from './components/pages/medium-banner';
import PopularArea from './components/pages/popular-area';
import ShopHomeList from './components/pages/shop-home-list';
import CountDownArea from './components/pages/countdown-area';
import ShopBlog from './components/pages/shop-blog';
import ServiceArea from './components/pages/service-area';
function App() {
  return (
    <>
    <Header/>
    <SliderArea/>
    <SmBannerSection/>
    <ProductArea/>
    <MeBanner/>
    <PopularArea/>
    <ShopHomeList/>
    <CountDownArea/>
    <ShopBlog/>
    <ServiceArea/>
    <Footer/>
    </>
  );
}

export default App;
