import Footer from "./footer";
import Header from "./header";
import CountDownArea from "./pages/main/countdown-area";
import MeBanner from "./pages/main/medium-banner";
import PopularArea from "./pages/main/popular-area";
import ProductArea from "./pages/main/product-area";
import ServiceArea from "./pages/main/service-area";
import ShopBlog from "./pages/main/shop-blog";
import ShopHomeList from "./pages/main/shop-home-list";
import SliderArea from "./pages/main/slider-area";
import SmBannerSection from "./pages/main/small-banner-section";

export function Index() {
    return (
        <>
            <SliderArea />
            {/* <SmBannerSection /> */}
            <ProductArea />
            <MeBanner />
            <PopularArea />
            <ShopHomeList />
            <CountDownArea />
            <ShopBlog />
            <ShopBlog />
            <ServiceArea />
            <Footer />
        </>
    )
}