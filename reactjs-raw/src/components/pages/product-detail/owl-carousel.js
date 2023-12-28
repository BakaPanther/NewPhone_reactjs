import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { NavLink, useNavigate } from 'react-router-dom';

function OwlDemo(props){
    const navigate = useNavigate();

    // Kiểm tra data có tồn tại ko
    if (!Array.isArray(props.data)) {
        console.error("Data is not an array:", props.data);
        return null;
    }

    return (
        <div className='similar-product-area'>
            <OwlCarousel items={3} margin={8} autoplay={true}>
                {props.data.map((item, index) => (
                    <div key={index}>
                        <NavLink to={`/product-details/${item.id}`} className="similar-items" onClick={(event) => {
                            event.preventDefault();
                            navigate(`/product-details/${item.id}`);
                            window.location.reload(); // Reload trang
                        }}>
                            {item.hinh_anh && item.hinh_anh[0] && (
                                <img className="similar-product-img" src={`http://localhost:8000/${item.hinh_anh[0].duong_dan}`} alt={item.name} />
                            )}
                            <div className="similar-product-name">{item.ten}   Giá: {item.chi_tiet_dien_thoai[0].gia_ban}VNĐ</div>
                        </NavLink>
                    </div>
                ))}
            </OwlCarousel>
        </div>
    );
};

export default OwlDemo;
