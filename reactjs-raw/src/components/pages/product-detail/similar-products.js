import axios from "axios";
import OwlDemo from "./owl-carousel";
import React, { useState, useEffect } from "react";

export default function SimilarProducts(props) {
    const [dienthoailienquan, setDienThoaiLienQuan] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/dien-thoai-lien-quan', {
            params: {
                dien_thoai_id: props.dien_thoai_id,
                nha_san_xuat_id: props.nha_san_xuat_id
            }
        })
            .then(response => {
                setDienThoaiLienQuan(response.data.data);
            })
            .catch(error => {
                console.error("Lỗi: ", error);
            });
    }, [props.dien_thoai_id, props.nha_san_xuat_id]);

    return (
        <>
            <div className="similar-products-container">
                <div className='container-fluid' >
                    <div className="row title" style={{ marginBottom: "20px" }} >
                        <h3>Sản phẩm tương tự</h3>
                    </div>
                </div>
                <OwlDemo data={dienthoailienquan}/>
            </div>
        </>
    )
}
