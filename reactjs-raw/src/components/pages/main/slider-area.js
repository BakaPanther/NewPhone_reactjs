import SingleSlider from "./single-slider";
import axios, { Axios } from "axios";
import React, { useState, useEffect } from "react";
function SliderArea() {
    const [slider, setSlider] = useState([]);

    useEffect(() => {
        // Thực hiện yêu cầu GET khi component được render
        axios.get('http://127.0.0.1:8000/api/banner')
            .then(response => {
                // Lưu dữ liệu nhận được vào state
                setSlider(response.data);
            })
            .catch(error => {
                // Hiện thông báo nếu có lỗi xảy ra
                console.error("Lỗi: ", error);
            });
    }, []); // [] để đảm bảo chỉ gửi yêu cầu một lần khi component mount

    // console.log(slider);
    return (
        <>
            <section className="hero-slider">
                <SingleSlider data={slider} />
            </section>
        </>
    )
}
export default SliderArea;