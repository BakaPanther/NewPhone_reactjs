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
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Index() {
    const [nhaSanXuat, setNhaSanXuat] = useState([]);
    //lay danh sach nhà sản xuất
    useEffect(() => {
        // Thực hiện yêu cầu GET khi component được render
        axios.get('http://127.0.0.1:8000/api/nha-san-xuat')
        .then(response => {
            // Lưu dữ liệu nhận được vào state
            setNhaSanXuat(response.data.data);
        })
        .catch(error => {
            // Hiện thông báo nếu có lỗi xảy ra
            console.error("Lỗi: ",error);
        });
    }, []); // [] để đảm bảo chỉ gửi yêu cầu một lần khi component mount

    const lst_nha_san_xuat = nhaSanXuat.map((item, key) => {
        if(item.dienThoai && item.dienThoai.length > 0)  {      
            const firstSixItems = item.dienThoai.slice(0, 6); // Lấy 6 phần tử đầu tiên
            return <ShopBlog data={{...item, dienThoai: firstSixItems}} key={key}/>
        }
      });
      
    return (
        <>
            <SliderArea />
            {/* <SmBannerSection /> */}
            {/* <ProductArea /> */}
            {/* <MeBanner /> */}
            <PopularArea />
            <ShopHomeList />
            {/* <CountDownArea /> */}
            {lst_nha_san_xuat}
            <ServiceArea />
            <Footer />
        </>
    )
}