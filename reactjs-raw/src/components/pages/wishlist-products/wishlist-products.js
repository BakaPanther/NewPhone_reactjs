import Footer from "../../footer";
import Header from "../../header";
import SingleWproduct from "./single-fproduct";
import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import { RingLoader } from "react-spinners";
export default function WishlistProducts() {
    //loader
    let [loading, setLoading] = useState(true);
    // let [color, setColor] = useState("#ffffff");
    // const override = {
    //     display: "block",
    //     margin: "0 auto",
    //     borderColor: "red",
    // };
    const [wishLish, setWishList] = useState([]);
    const [khach_hang_id, setKhach_hang_id] = useState(JSON.parse(Cookies.get('user')));

    useEffect(() => {
        setTimeout(() => {
            axios.get('http://127.0.0.1:8000/api/khach-hang/danh-sach-yeu-thich', {
                params: {
                    khach_hang_id: khach_hang_id.id
                }
            })
                .then((response) => {
                    setWishList(response.data.data);
                    setLoading(false);
                })
                .catch(error => {
                    // Hiện thông báo nếu có lỗi xảy ra
                    console.error("Lỗi: ", error);
                });
        }, 1000);
    }, [khach_hang_id]);
    return (
        <>
            {(!loading) ? (
                <>
                    <Header />
                    <div className="shopping-cart section">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <table className="table shopping-summery">
                                        <thead>
                                            <tr className="main-hading">
                                                <th>Điện Thoại</th>
                                                <th>Màu Sắc</th>
                                                <th className="text-center">Dung Lượng</th>
                                                <th className="text-center">Giá Bán</th>
                                                <th className="text-center"><i className="ti-bag"></i></th>
                                                <th className="text-center"><i className="ti-trash remove-icon"></i></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <SingleWproduct data={wishLish} setData={setWishList} />
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            ) : (
                <RingLoader
                    color="#F7941D"
                    loading
                    cssOverride={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                    size={148}
                    speedMultiplier={1}
                />
            )}
        </>
    )
}